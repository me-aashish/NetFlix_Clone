import { onAuthStateChanged, signOut } from '@firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { auth } from '../utils/firebaseConfig';
import { addUser, removeUser } from '../utils/userSlice'
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toogleSearchContainer } from '../utils/searchSlice';
import { changeLanguage } from '../utils/congifSlice';
import languages from '../utils/languageConstants';


const Header = () => {

  const user = useSelector(store => store.user);
  const isSearchContainerVisible = useSelector(
    (store) => store.search.isSearchContainerVisible
  );
  const currentLanguage = useSelector((store) => store.config.language);
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

  const handleLanguageOnchange = (e) => {
    dispatch(changeLanguage(e.target.value));
    
    // console.log(e.target.value);
  }

  return (
    <div className="absolute w-screen px-4 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44 " src={NETFLIX_LOGO} alt="logo" />

      {user && (
        <div className="w-[24rem] flex">
          {
            <div className="w-[111px] mr-[17px]">
              <select
                className="m-4 p-2  bg-[#e50914] text-white font-semibold cursor-pointer rounded-lg hover:bg-red-800"
                onChange={(e) => handleLanguageOnchange(e)}
              >
                {SUPPORTED_LANGUAGES.map((language) => (
                  <option
                    value={language.identifier}
                    key={language.identifier}
                    className="bg-gray-700"
                  >
                    {language.name}
                  </option>
                ))}
              </select>
            </div>
          }
          <div className="">
            <button
              className="bg-[#e50914] m-4 p-2 rounded-lg text-white font-semibold hover:bg-red-800 w-[111px] ml-[1px]"
              onClick={handleSearchContainerVisibilty}
            >
              {!isSearchContainerVisible
                ? languages[currentLanguage].search
                : "❌ " + languages[currentLanguage].close}
            </button>
          </div>
          <div>
            <button
              className="bg-[#e50914] m-4 p-2 rounded-lg text-white font-semibold hover:bg-red-800 w-[111px] ml-[1px]"
              onClick={handleLogOut}
            >
              {languages[currentLanguage].logOut}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header