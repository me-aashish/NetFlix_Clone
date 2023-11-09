import React from 'react'
import { MORE_INFO_ICON } from '../utils/constants'

const MainVideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold ">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-justify">{overview}</p>
      <div className="flex">
        <button className="flex bg-white  text-black h-[3.25rem] pt-[12px] text-lg w-[125px] pl-[35px] rounded-lg hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="flex bg-gray-500 w-18 text-white h-[3.25rem] w-[145px] pl-[16px] pt-[12px] ml-5 bg-opacity-40 rounded-lg hover:bg-opacity-30">
          <img src={MORE_INFO_ICON} alt="more-info" className="w-7 h-7 mr-2" />
          More Info{" "}
        </button>
      </div>
    </div>
  );
}

export default MainVideoTitle