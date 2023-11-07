import React from "react";

const BrowsePageHeader = () => {
  return (
    <div className="absolute w-screen px-4 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div>
        <button className="bg-[#e50914] m-4 p-2 rounded-lg text-white font-semibold">Log Out</button>
      </div>
    </div>
  );
};

export default BrowsePageHeader;
