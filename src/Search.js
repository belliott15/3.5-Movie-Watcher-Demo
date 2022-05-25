import React, { useState, useEffect } from 'react';
import { fetchMovies } from './services/fetch-utils';
import { getMovies } from './services/SupabaseUtils';
import MovieCard from './MovieCard';
import { removeMovie } from './services/SupabaseUtils';
export default function Search() {
  const [search, setSearch] = useState('');
  const [result, setResults] = useState([]);
  const [favMovies, setFavMovies] = useState([]);

  async function fetch() {
    const movieData = await getMovies();
    setFavMovies(movieData);
  }

  useEffect(() => {
    fetch();
  }, []);

  async function handleSearch(e) {
    e.preventDefault();
    const movies = await fetchMovies(search);
    setResults(movies.results);
    await fetch();
  }

  return (
    <div className='search'>
      <form className='search-form' onSubmit={handleSearch}>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <button>Search</button>
      </form>
      <div className="movie-card watchlist">
        {result.map((resultEl) => (
          <MovieCard key={resultEl.id} {...resultEl} favMovies={favMovies} fetch={fetch} api_id={resultEl.api_id} />
        ))}
      </div>
    </div>
  );
}
