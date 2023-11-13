import React from 'react'
import { useSelector } from 'react-redux';
import { MORE_INFO_ICON } from '../utils/constants'
import languages from '../utils/languageConstants';

const MainVideoTitle = ({ title, overview }) => {

  const currentLanguage = useSelector(store => store.config.language);

  return (
    <div className="w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold ">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-justify">{overview}</p>
      <div className="flex">
        <button className="flex bg-white  text-black h-[3.25rem] pt-[12px] text-lg w-[125px] pl-[35px] rounded-lg hover:bg-opacity-80">
          ▶ {languages[currentLanguage].Play}
        </button>
        <button className="flex bg-gray-500  text-white h-[3.25rem] w-[147px] pl-[16px] pt-[12px] ml-5 bg-opacity-40 rounded-lg hover:bg-opacity-30">
            <img
              src={MORE_INFO_ICON}
              alt="more-info"
              className="w-7 h-7 mr-2"
            />
            {languages[currentLanguage].MoreInfo}{" "}
        </button>
        
      </div>
    </div>
  );
}

export default MainVideoTitle