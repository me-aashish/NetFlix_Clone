import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MORE_INFO_ICON } from '../utils/constants'
import languages from '../utils/languageConstants';
import translate from "translate";
translate.engine = "google";

const MainVideoTitle = ({ title, overview }) => {

  const currentLanguage = useSelector((store) => store.config.language);
  const dispatch = useDispatch();
  const [translatedTitle, setTranslatedTitle] = useState(title);
  const [translatedOverview, setTranslatedOverview] = useState(overview);

  const tran = async(currentLanguage) => {
    if(currentLanguage === "spanish"){
      setTranslatedTitle(await translate(title, "es"));
      setTranslatedOverview(await translate(overview, "es"));
    }
    else if (currentLanguage === "hin") {
      setTranslatedTitle(await translate(title, currentLanguage));
      setTranslatedOverview(await translate(overview, currentLanguage));
    }
    else if (currentLanguage === "en") {
       return;
    }
  }
  
  tran(currentLanguage);

  return (
    <div className="w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold ">{translatedTitle}</h1>
      <p className="py-6 text-lg w-1/4 text-justify">{translatedOverview}</p>
      <div className="flex">
        <button className="flex bg-white  text-black h-[3.25rem] pt-[12px] text-lg w-[125px] pl-[35px] rounded-lg hover:bg-opacity-80">
          ▶ {languages[currentLanguage].Play}
        </button>
        <button className="flex bg-gray-500  text-white h-[3.25rem] w-[147px] pl-[16px] pt-[12px] ml-5 bg-opacity-40 rounded-lg hover:bg-opacity-30">
          <img src={MORE_INFO_ICON} alt="more-info" className="w-7 h-7 mr-2" />
          {languages[currentLanguage].MoreInfo}{" "}
        </button>
      </div>
    </div>
  );
}

export default MainVideoTitle