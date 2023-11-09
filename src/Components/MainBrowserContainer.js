import React from 'react'
import { useSelector } from 'react-redux'
import MainVideoBG from './MainVideoBG';
import MainVideoTitle from './MainVideoTitle';

const MainBrowserContainer = () => {

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  
  if(!movies) return;

  const { original_title, overview } = movies[0];
  const mainVideo = movies[0];
  return (
    <div>
        <MainVideoTitle title={original_title} overview={overview} />
        <MainVideoBG />
    </div>
  )
}

export default MainBrowserContainer