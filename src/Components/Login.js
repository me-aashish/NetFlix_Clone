import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="bg"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <form className="absolute bg-black w-[30%] p-12 mt-[6rem] mb-[9rem] mx-auto right-0 left-0 text-white 
      rounded-sm bg-opacity-80">
        <h1 className="font-bold text-xl py-4 ">Sign In </h1>
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-4 my-4 w-full bg-gray-700 rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-sm"
        />
        <button className="bg-red-900 p-4 my-6 w-full rounded-sm">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login