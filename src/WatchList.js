import React, { useEffect, useState } from 'react';
import { getMovies, removeMovie } from './services/SupabaseUtils';
import MovieCard from './MovieCard';

export default function WatchList() {
  const [favMovies, setFavMovies] = useState([]);

  async function fetch() {
    const movieData = await getMovies();
    setFavMovies(movieData);
  }
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className='watchlist'>
      {favMovies.map((movie, i) => (
        <>
          <MovieCard key={movie.id + movie.title + i + movie.release_date} 
            {...movie}  
            favMovies={favMovies} 
            fetch={fetch}
          />
        </>
      ))}
    </div>
  );
}
