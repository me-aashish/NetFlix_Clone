import React from 'react'
import { useSelector } from 'react-redux'
import MainVideoBG from './MainVideoBG';
import MainVideoTitle from './MainVideoTitle';

const MainBrowserContainer = () => {

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);


  
  

  return (
    <div>
        <MainVideoTitle />
        <MainVideoBG />
    </div>
  )
}

export default MainBrowserContainer