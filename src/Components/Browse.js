import React from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import Header from './Header'
import MainBrowserContainer from './MainBrowserContainer';
import SecondaryBrowserContainer from './SecondaryBrowserContainer';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      <MainBrowserContainer />
      <SecondaryBrowserContainer />
    </div>
  )
}

export default Browse