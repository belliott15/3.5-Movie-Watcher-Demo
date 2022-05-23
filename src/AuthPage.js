import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInUser, signUpUser } from './services/SupabaseUtils';

export default function AuthPage() {
  const { push } = useHistory();
  const [signInData, setSignInData] = useState({
    email: '', 
    password: ''
  });
  const [signUpData, setSignUpData] = useState({
    email: '', 
    password: ''
  });

  async function handleSignIn(e){
    e.preventDefault();
    await signInUser(signInData.email, signInData.password);
    push('/watch-list');
    setSignInData('');
  }

  async function handleSignUp(e){
    e.preventDefault();
    await signUpUser(signUpData.email, signUpData.password);

    push('/watch-list');
    setSignUpData('');
  }

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <p>Sign In</p>
        <label>
          Email
          <input value={signInData.email} type='email' onChange={(e) => setSignInData({ 
            email: e.target.value, 
            password: signInData.password 
          })}/>
          Password
          <input value={signInData.password} type='password' onChange={(e) => setSignInData({ 
            email: signInData.email, 
            password: e.target.value 
          })}/>
        </label>
        <button> Submit</button>
      </form>
      <form onSubmit={handleSignUp}>
        <p>Sign Up</p>
        <label>
          Email
          <input value={signUpData.email} type='email' onChange={(e) => setSignUpData({ 
            email: e.target.value, 
            password: signUpData.password 
          })} />
          Password
          <input value={signUpData.password} type='password' onChange={(e) => setSignUpData({ 
            email: signUpData.email, 
            password: e.target.value
          })}/>
        </label>
        <button> Submit </button>
      </form>
    </div>
  );
}
