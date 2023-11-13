import React from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import Header from './Header'
import MainBrowserContainer from './MainBrowserContainer';
import SecondaryBrowserContainer from './SecondaryBrowserContainer';
import Search from "./Search";
import { useSelector } from 'react-redux';

const Browse = () => {

  const isSearchContainerVisible = useSelector(
    (store) => store.search.isSearchContainerVisible
  );


  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {isSearchContainerVisible ? (
        <Search />
      ) : (
        <>
          <MainBrowserContainer />
          <SecondaryBrowserContainer />
        </>
      )}
    </div>
  );
}

export default Browse