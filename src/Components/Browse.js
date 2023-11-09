import React from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header'
import MainBrowserContainer from './MainBrowserContainer';
import SecondaryBrowserCOntainer from './SecondaryBrowserCOntainer';

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainBrowserContainer />
      <SecondaryBrowserCOntainer />
    </div>
  )
}

export default Browse