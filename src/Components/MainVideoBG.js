import React from 'react'
import { useSelector } from 'react-redux';
import useMainBGVideo from '../hooks/useMainBGVideo';


const MainVideoBG = ({ movieId }) => {

  useMainBGVideo(movieId);
  const trailerVideoData = useSelector((store) => store.movies?.trailerVideo);

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