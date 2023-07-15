'use client';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('billy@example.com');
  const [password, setPassword] = useState('test1234');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleLogin}
      className='border border-rose-700 w-96 flex flex-col gap-y-8 p-4 mx-auto my-8'
    >
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
    </form>
  );
};

export default Login;
