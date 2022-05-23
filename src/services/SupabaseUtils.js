import { client } from './client';

export async function getMovies() {
  const { data } = await client
    .from('fav_movies')
    .select('*');
  
  return data;
}

export async function removeMovie(id) {
  const { data } = await client
    .from('fav_movies')
    .delete()
    .match({ id })
    .single();
  
  return data;
}

export async function addMovie(movie) {
  const { data } = await client
    .from('fav_movies')
    .insert(movie);

  return data;
}



export async function getUser() {

  return client.auth.session();
}
  
export async function signupUser(email, password){
  const response = await client.auth.signUp({ email, password });
      
  return response.user;
}
  
export async function signInUser(email, password){
  const response = await client.auth.signIn({ email, password });
  
  return response.user;
}

export async function Logout() {
  return await client.auth.signOut();
}