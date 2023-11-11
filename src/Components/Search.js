import React from 'react'
import { NETFLIX_BG } from '../utils/constants';
import SearchBar from './SearchBar'
import SearchMovieSuggestions from './SearchMovieSuggestions'

const Search = () => {
  return (
    <div>
      <div className="absolute -z-20">
        <img alt="bg" src={NETFLIX_BG} />
      </div>
      <SearchBar />
      <SearchMovieSuggestions />
    </div>
  );
}

export default Search