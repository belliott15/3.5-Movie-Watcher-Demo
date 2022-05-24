import React from 'react';
import { addMovie } from './services/SupabaseUtils.js';

export default function MovieCard({ title, overview, poster_path, id, release_date }) {
  async function addToWatchList() {
    await addMovie({ title, overview, poster_path, api_id:id, release_date });
  }

  return (
    <div className="movie-card">
      <div>
        <p>{title}</p>
        <p>{release_date}</p>
        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} />
        <button onClick={addToWatchList}>Add to WatchList</button>
      </div>
    </div>
  );
}
