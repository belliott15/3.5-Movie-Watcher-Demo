import React, { useEffect, useState } from 'react';
import { 
  getMovies,
  removeMovie,
  getOneMovie } from './services/SupabaseUtils';
import MovieCard from './MovieCard';


export default function WatchList() {
  const [favMovies, setFavMovies] = useState([]);
  
  useEffect(() => {
    async function fetch() {
      const movieData = await getMovies();
      setFavMovies(movieData);
    }
    fetch();
  }, []);
  async function handleDelete() {
    await removeMovie(favMovies.id);
  }
  return <div>
    {favMovies.map((movie, i) =>
      <><MovieCard key={movie.id + movie.title + i} {...movie} />
        <button onClick={handleDelete}>Watched</button>
      </>)}
  </div>;
}
