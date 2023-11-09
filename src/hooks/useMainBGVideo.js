import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/moviesSlice';

const useMainBGVideo = (movieId) => {
  const dispatch = useDispatch();

  const getMainMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );

    const json = await data.json();

    const filterMovieClips = json.results.filter(
      (clip) => clip.type === "Trailer"
    );
    const movieTrailer = filterMovieClips.length
      ? filterMovieClips[0]
      : json.results[0];

    dispatch(addTrailerVideo(movieTrailer));
  };

  useEffect(() => {
    getMainMovieTrailer();
  }, []);
}

export default useMainBGVideo