import React from 'react';
import { fetchMovies } from './services/fetch-utils';

export default function MovieCard({ movies }) {
  return (
    <div>
      {movies.map((movie, i) => (
        <div key={movie.id + movie.title}>
          <p>{movie.original_title}</p>
          <p>{movie.year}</p>
          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
        </div>
      ))}
    </div>
  );
}
