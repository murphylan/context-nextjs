'use client';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('billy@example.com');
  const [password, setPassword] = useState('test1234');

  return (
    <>
      <input
        type='email'
        placeholder='Email'
        className='bg-rose-300/10 p-2'
        value={email}
        onChange={e => setEmail(e.target.value.trim())}
      />
      <input
        type='password'
        placeholder='Password'
        className='bg-rose-300/10 p-2'
        value={password}
        onChange={e => setPassword(e.target.value.trim())}
      />
      <button type='submit' className='font-bold text-rose-700'>
        Login
      </button>
    </>
  );
};

export default Login;
