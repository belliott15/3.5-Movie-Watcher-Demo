import { client } from './client';





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