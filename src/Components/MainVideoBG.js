import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/moviesSlice';

const MainVideoBG = ({ movieId }) => {

  const dispatch = useDispatch();
  const trailerVideoData = useSelector((store) => store.movies?.trailerVideo);

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
    
    console.log(movieTrailer.key);

    dispatch(addTrailerVideo(movieTrailer));
  }

  useEffect(() => {
    getMainMovieTrailer();
  }, [])

  return (
    <div>
      <iframe
        src={"https://www.youtube.com/embed/"+trailerVideoData?.key}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default MainVideoBG