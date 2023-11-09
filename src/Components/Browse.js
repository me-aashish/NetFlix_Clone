import React from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header'
import MainBrowserContainer from './MainBrowserContainer';
import SecondaryBrowserContainer from './SecondaryBrowserContainer';

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainBrowserContainer />
      <SecondaryBrowserContainer />
    </div>
  )
}

export default Browse