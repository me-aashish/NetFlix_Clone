import React from 'react'
import { MORE_INFO_ICON } from '../utils/constants'

const MainVideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-4xl font-bold ">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-justify">{overview}</p>
      <div className="flex">
        <button className="flex bg-gray-500  text-white h-[3.25rem] pt-[12px] text-lg px-10 bg-opacity-50 rounded-lg">
          ▶ Play
        </button>
        <button className="flex bg-gray-500 w-18 text-white h-[3.25rem] pt-[12px] ml-5 px-10 bg-opacity-50 rounded-lg">
          <img src={MORE_INFO_ICON} alt="more-info" className="w-7 h-7 mr-2" />
          More Info{" "}
        </button>
      </div>
    </div>
  );
}

export default MainVideoTitle