import React from 'react'
import { useSelector } from 'react-redux'
import { SCROLL_BTN_LINK } from '../utils/constants';
import languages from '../utils/languageConstants';
import MovieList from './MovieList'

const SecondaryBrowserContainer = () => {

  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const currentLanguage = useSelector((store) => store.config.language);

  return (
    <div className=" bg-black">
      <div className="-mt-80 relative z-30">
        <MovieList
          title={languages[currentLanguage].NowPlaying}
          movies={nowPlayingMovies}
          className="flex"
        />

        <MovieList
          title={languages[currentLanguage].TopRated}
          movies={topRatedMovies}
          className=""
        />
        <MovieList
          title={languages[currentLanguage].Popular}
          movies={popularMovies}
          className=""
        />
        <MovieList
          title={languages[currentLanguage].Upcoming}
          movies={upcomingMovies}
          className=""
        />
      </div>
    </div>
  );
}

export default SecondaryBrowserContainer