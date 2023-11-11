import { onAuthStateChanged, signOut } from '@firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { auth } from '../utils/firebaseConfig';
import { addUser, removeUser } from '../utils/userSlice'
import { NETFLIX_LOGO } from '../utils/constants';
import { toogleSearchContainer } from '../utils/searchSlice';

const Header = () => {

  const user = useSelector(store => store.user);
  const isSearchContainerVisible = useSelector(
    (store) => store.search.isSearchContainerVisible
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;

        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        if(isSearchContainerVisible) dispatch(toogleSearchContainer());
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleSearchContainerVisibilty = () => {
    dispatch(toogleSearchContainer());
  }

  return (
    <div className="absolute w-screen px-4 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={NETFLIX_LOGO} alt="logo" />

      {user && (
        <div className="w-56 flex">
          <div className="">
            <button
              className="bg-[#e50914] m-4 p-2 rounded-lg text-white font-semibold hover:bg-red-800 w-[85px]"
              onClick={handleSearchContainerVisibilty}
            >
              {!isSearchContainerVisible ? "Search" : "❌ Close"}
            </button>
          </div>
          <div>
            <button
              className="bg-[#e50914] m-4 p-2 rounded-lg text-white font-semibold hover:bg-red-800 w-[85px] ml-[1px]"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header