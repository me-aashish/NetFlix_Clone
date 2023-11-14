import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS, POSTER_CDN_LINK } from '../utils/constants';
import languages from '../utils/languageConstants';
import { addSearchSuggestedMovies } from '../utils/moviesSlice';
import openai from '../utils/openAI';
import MovieList from './MovieList';


const SearchBar = () => {
  const searchText = useRef(null);
  const currentLanguage = useSelector((store) => store.config.language);
  const dispatch = useDispatch();

  const movieSearchInTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  }

  const handleSearchQuery = async() => {
    try {
      const searchQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        searchText.current.value +
        ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

      const searchResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: searchQuery }],
        model: "gpt-3.5-turbo",
      });
      console.log(searchResults.choices?.[0]?.message?.content);

      const moviesToBeSearchedInTMDB =
        searchResults.choices?.[0]?.message?.content.split(", ");

      const TMDBpromiseMovieArray = moviesToBeSearchedInTMDB.map(
        (movie) => movieSearchInTMDB(movie)
      );

      const actualMovieArray = await Promise.all(TMDBpromiseMovieArray);
      dispatch(addSearchSuggestedMovies(actualMovieArray));
      // console.log(actualMovieArray);
      
    } catch (error) {
      console.log(error)
      alert(error);
    }
  }
  return (
    <>
      <div className="pt-[10%] flex justify-center ">
        <form
          className="bg-black w-1/2 grid grid-cols-12 bg-opacity-80 rounded-sm"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            ref={searchText}
            type="text"
            placeholder={languages[currentLanguage].searchPlaceholder}
            className="m-4 p-4 rounded-lg col-span-9 bg-gray-700 text-white"
          ></input>
          <button
            className="bg-[#e50914] m-4 p-4 rounded-lg text-white font-semibold col-span-3 hover:bg-red-800"
            onClick={handleSearchQuery}
          >
            {languages[currentLanguage].search}
          </button>
        </form>
      </div>
    </>
  );
}

export default SearchBar