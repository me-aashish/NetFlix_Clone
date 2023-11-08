import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { validateCredentials } from "../utils/credentialsValidator";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";

const Login = () => {
  const [isSign, setIsSignIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    setErrorMessage("");
    const message = validateCredentials(
      email.current.value,
      password.current.value,
      name?.current?.value
    );

    if (message) {
      setErrorMessage(message);
      return;
    }

    if (!isSign) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/79035986?v=4",
          })
            .then(() => {})
            .catch((error) => {
              const errorCode = error.code;
              const generatedErrorMessage = error.message;
              setErrorMessage(errorCode + " " + generatedErrorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const generatedErrorMessage = error.message;
          setErrorMessage(errorCode + " " + generatedErrorMessage);

          console.log(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const generatedErrorMessage = error.message;
          setErrorMessage(errorCode + " " + generatedErrorMessage);
        });
    }
  };

  const toogleSignInForm = () => {
    setIsSignIn(!isSign);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="bg"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black w-[30%] p-12 mt-[6rem] mb-[9rem] mx-auto right-0 left-0 text-white 
      rounded-sm bg-opacity-80"
      >
        <h1 className="font-bold text-2xl py-2 ">
          {isSign ? "Sign In" : "Sign Up"}
        </h1>
        {!isSign && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 w-full bg-gray-700 rounded-sm h-[44px]"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="p-4 my-3 w-full bg-gray-700 rounded-sm h-[44px]"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full bg-gray-700 rounded-sm h-[44px]"
        />
        <p className="text-[#e50914] font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="bg-[#e50914] p-2 my-4 w-full rounded-sm h-[44px] font-bold"
          onClick={() => handleSubmit()}
        >
          {isSign ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="text-sm cursor-pointer"
          onClick={() => toogleSignInForm()}
        >
          {isSign
            ? "New to Netflix? Sign Up Now!"
            : "Already a user? Sign In Now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
