import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies}) => {
  return (
    <div className="pl-12 bg-black">
      <h1 className="text-2xl font-semibold text-white pt-6">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar pt-4">
        <div className="flex ">
          {movies &&
            movies.map((movie) => (
              <MovieCard
                title={"Now Playing"}
                movies={movie}
                key={movie.id}
                className="flex"
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList