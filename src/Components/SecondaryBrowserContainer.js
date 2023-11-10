import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryBrowserContainer = () => {

  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  return (
    <div className=" bg-black">
      <div className="-mt-80 relative z-30">
        <MovieList
          title={"Now Playing"}
          movies={nowPlayingMovies}
          className=""
        />
        <MovieList title={"Top Rated"} movies={topRatedMovies} className="" />
        <MovieList title={"Popular"} movies={popularMovies} className="" />
        <MovieList title={"Upcoming"} movies={upcomingMovies} className="" />
      </div>
    </div>
  );
}

export default SecondaryBrowserContainer