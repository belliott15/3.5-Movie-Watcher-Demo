import React from 'react';

export default function AuthPage() {
  return (
    <div>
      <form>
        <p>Sign In</p>
        <label>
          Email
          <input />
          Password
          <input />
        </label>
        <button> Submit</button>
      </form>
      <form>
        <p>Sign Up</p>
        <label>
          Email
          <input />
          Password
          <input />
        </label>
        <button> Submit </button>
      </form>
    </div>
  );
}
