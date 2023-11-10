import React from 'react'
import { useSelector } from 'react-redux';
import useMainBGVideo from '../hooks/useMainBGVideo';


const MainVideoBG = ({ movieId }) => {

  useMainBGVideo(movieId);
  const trailerVideoData = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideoData?.key +
          "?autoplay=1&mute=1&loop=1&playlist=" +
          trailerVideoData?.key
        }
        title="YouTube video player"
        frameBorder="0"
        allow="fullscreen"
      ></iframe>
    </div>
  );
}

export default MainVideoBG