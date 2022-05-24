import React, { useState, useEffect } from 'react';
import { fetchMovies } from './services/fetch-utils';
import MovieCard from './MovieCard';
export default function Search() {
  const [search, setSearch] = useState('');
  const [result, setResults] = useState([]);
  console.log(result);
  async function handleSearch(e) {
    e.preventDefault();
    const movies = await fetchMovies(search);
    setResults(movies.results);
  }
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <button>Search</button>
      </form>
      <div className="movie-card">
        {result.map((resultEl) => (
          <MovieCard key={resultEl.id} {...resultEl} />
        ))}
      </div>
    </div>
  );
}
