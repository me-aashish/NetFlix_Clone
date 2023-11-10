import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryBrowserContainer = () => {

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  return (
    <div className=" bg-black">
      <div className="-mt-80 relative z-30">
        <MovieList
          title={"Now Playing"}
          movies={nowPlayingMovies}
          className=""
        />
        <MovieList title={"Popular"} movies={popularMovies} className="" />
        <MovieList title={"Trending"} movies={nowPlayingMovies} className="" />
        <MovieList title={"Hot"} movies={nowPlayingMovies} className="" />
      </div>
    </div>
  );
}

export default SecondaryBrowserContainer