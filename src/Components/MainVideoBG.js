import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';

const MainVideoBG = ({ movieId }) => {

  const getMainMovieTrailer = async() => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );

    const json = await data.json();
    
    const filterMovieClips = json.results.filter( clip => clip.type === "Trailer");
    const movieTrailer = filterMovieClips.length
      ? filterMovieClips[0]
      : json.results[0];
    
    console.log(movieTrailer);
  }

  useEffect(() => {
    getMainMovieTrailer();
  }, [])

  return (
    <div>MainVideoBG</div>
  )
}

export default MainVideoBG