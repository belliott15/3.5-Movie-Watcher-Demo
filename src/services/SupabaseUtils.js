import { client } from './client';

export async function getMovies() {
  const { data } = await client
    .from('fav_movies')
    .select('*');
  
  return data;
}

export async function removeMovie(api_id) {
  const { data } = await client
    .from('fav_movies')
    .delete()
    .match({ api_id })
    .single();
  
  return data;
}

export async function addMovie(movie) {
  const { data } = await client
    .from('fav_movies')
    .insert(movie);

  return data;
}

export async function getOneMovie(id) {
  const { data } = await client
    .from('fav_movies')
    .select('*')
    .match({ id })
    .single();

  return data;
}

export async function getUser() {

  const thatGuy = client.auth.session();
  return thatGuy;
}
  
export async function signUpUser(email, password){
  const response = await client.auth.signUp({ email, password });
      
  return response.user;
}
  
export async function signInUser(email, password){
  const response = await client.auth.signIn({ email, password });
  
  return response.user;
}

export async function logout() {
  return await client.auth.signOut();
}