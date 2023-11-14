import React from 'react'
import { useSelector } from 'react-redux'
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
      {suggestedMovies?.map((movie, idx) => (
        <MovieList title={"Showing Results For : " + searchText.searchText} movies={movie} />
      ))}
    </div>
  );
}

export default SearchMovieSuggestions