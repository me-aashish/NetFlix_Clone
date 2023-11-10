import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryBrowserContainer = () => {

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  return (
    <div className="">
      <MovieList title={"Now Playing"} movies={nowPlayingMovies} className="" />
      <MovieList title={"Trending"} movies={nowPlayingMovies} className="" />
      <MovieList title={"Popular"} movies={nowPlayingMovies} className="" />
      <MovieList title={"Hot"} movies={nowPlayingMovies} className="" />
    </div>
  );
}

export default SecondaryBrowserContainer