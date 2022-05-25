export async function fetchMovies(someMovie) {
  const response = await fetch(`/.netlify/functions/movies?movie=${someMovie}`);
  const data = await response.json();
  return data;
}
