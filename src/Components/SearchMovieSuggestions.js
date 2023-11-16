import React from 'react'
import { useSelector } from 'react-redux'
import { POSTER_CDN_LINK } from '../utils/constants';
import MovieCard from './MovieCard';
import MovieList from './MovieList';

const SearchMovieSuggestions = () => {
  const suggestedMovies = useSelector(
    (store) => store.movies.searchSuggestedMovies
  );
  // const searchText = (useSelector = useSelector(
  //   (store) => store.movies.searchText
  // ));
  const movieSlice = useSelector((store) => store.movies);
  const { searchText} = movieSlice;
  console.log(searchText);
  return (
    <div>
      <h1 className="text-2xl font-bold text-white pt-6 pl-12">
        {"Showing Results For : " + searchText.searchText}
      </h1>
      <div>
        {suggestedMovies?.map((movie, idx) => (
          // <MovieList title={"Showing Results For : " + searchText.searchText} movies={movie} />
          <>
            <div className="pl-12 ">
              <div className="flex pt-4 pl-6">
                <div className="flex flex-wrap ">
                  {movie[idx] &&
                    movie.map((movie) => (
                      // <MovieCard movies={movie} key={movie.id} className="flex" />
                      movie.poster_path  ? <div className="flex  w-64 ml-4 pt-4">
                        <img
                          alt="poster"
                          src={POSTER_CDN_LINK + movie.poster_path}
                          className="w-[267px] h-[235px]"
                        />
                      </div> : null
                    ))}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default SearchMovieSuggestions