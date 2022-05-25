import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getUser, signInUser, signUpUser } from './services/SupabaseUtils';
import { TextField } from '@mui/material';


export default function AuthPage({ setToken }) {
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

    const { access_token } = await getUser();
    setToken(access_token);

    push('/watch-list');
    setSignInData('');
  }

  async function handleSignUp(e){
    e.preventDefault();
    await signUpUser(signUpData.email, signUpData.password);

    const { access_token } = await getUser();
    setToken(access_token);

    push('/watch-list');
    setSignUpData('');
  }

  return (
    <div className='authpage'>
      <form onSubmit={handleSignIn}>
        <p>Sign In</p>
        <label>
          <TextField margin='normal' size='small' id="outlined-basic" label="E-mail" variant="outlined" value={signInData.email} type='email' onChange={(e) => setSignInData({ 
            email: e.target.value, 
            password: signInData.password 
          })}/>
          <TextField margin='normal' size='small' id="outlined-basic" label="Password" variant="outlined" value={signInData.password} type='password' onChange={(e) => setSignInData({ 
            email: signInData.email, 
            password: e.target.value 
          })}/>
        </label>
        <button> Submit</button>
      </form>
      <form onSubmit={handleSignUp}>
        <p>Sign Up</p>
        <label>
          
          <TextField margin='normal' size='small' id="outlined-basic" label="E-mail" variant="outlined" value={signUpData.email} type='email' onChange={(e) => setSignUpData({ 
            email: e.target.value, 
            password: signUpData.password 
          })} />
          
          <TextField margin='normal' size='small' id="outlined-basic" label="Password" variant="outlined" value={signUpData.password} type='password' onChange={(e) => setSignUpData({ 
            email: signUpData.email, 
            password: e.target.value
          })}/>
        </label>
        <button> Submit </button>
      </form>
    </div>
  );
}
