import React from 'react'
import { POSTER_CDN_LINK } from '../utils/constants'

const MovieCard = ({ movies}) => {
    console.log(movies);
  return (
    <div className="flex  w-64 ml-4">
        <img alt="poster" src={POSTER_CDN_LINK + movies.poster_path} className="w-[267px] h-[235px]"/>
    </div>
  );
}

export default MovieCard