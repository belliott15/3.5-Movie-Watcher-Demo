export async function fetchMovies(someMovie) {
  const data = await fetch(`/.netlify/functions/movies?movie=${someMovie}`);

  return data;
}
