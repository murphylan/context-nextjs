'use client';
import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSignup}
      className='border border-rose-700 w-96 flex flex-col gap-y-8 p-4 mx-auto my-8'
    >
      <input
        type='text'
        placeholder='Name'
        className='bg-rose-300/10 p-2'
        value={name}
        onChange={e => setName(e.target.value.trim())}
      />
      <input
        type='email'
        value={email}
        className='bg-rose-300/10 p-2'
        placeholder='Email'
        onChange={e => setEmail(e.target.value.trim())}
      />
      <input
        type='password'
        value={password}
        className='bg-rose-300/10 p-2'
        placeholder='Password'
        onChange={e => setPassword(e.target.value.trim())}
      />
      <button type='submit' className='font-bold text-rose-700'>
        Signup
      </button>
    </form>
  );
};

export default Signup;
