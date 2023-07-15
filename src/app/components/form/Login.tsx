'use client';
import React, { useState } from 'react';

type Props = {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
};

const Login = ({ email, password, setEmail, setPassword }: Props) => {
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
