import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getUser, signInUser, signUpUser } from './services/SupabaseUtils';
import { TextField } from '@mui/material';


export default function AuthPage({ setToken }) {
  const { push } = useHistory();
  const [formData, setFormData] = useState({
    email: '', 
    password: ''
  });

  async function handleSignIn(e){
    e.preventDefault();
    await signInUser(formData.email, formData.password);

    const { access_token } = await getUser();
    setToken(access_token);

    push('/watch-list');
    setFormData('');
  }

  async function handleSignUp(e){
    e.preventDefault();
    await signUpUser(formData.email, formData.password);

    const { access_token } = await getUser();
    setToken(access_token);

    push('/watch-list');
    setFormData('');
  }

  return (
    <div className='authpage'>
      <form onSubmit={handleSignIn}>
        <p>Sign In</p>
        <label>
          <TextField margin='normal' size='small' id="outlined-basic" label="E-mail" variant="outlined" value={formData.email} type='email' onChange={(e) => setFormData({ 
            email: e.target.value, 
            password: formData.password 
          })}/>
          <TextField margin='normal' size='small' id="outlined-basic" label="Password" variant="outlined" value={formData.password} type='password' onChange={(e) => setFormData({ 
            email: formData.email, 
            password: e.target.value 
          })}/>
        </label>
        <button> Submit</button>
      </form>
      <form onSubmit={handleSignUp}>
        <p>Sign Up</p>
        <label>
          
          <TextField margin='normal' size='small' id="outlined-basic" label="E-mail" variant="outlined" value={formData.email} type='email' onChange={(e) => setFormData({ 
            email: e.target.value, 
            password: formData.password 
          })} />
          
          <TextField margin='normal' size='small' id="outlined-basic" label="Password" variant="outlined" value={formData.password} type='password' onChange={(e) => setFormData({ 
            email: formData.email, 
            password: e.target.value
          })}/>
        </label>
        <button> Submit </button>
      </form>
    </div>
  );
}
