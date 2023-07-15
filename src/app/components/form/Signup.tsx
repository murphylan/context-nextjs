'use client';
import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
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
    </>
  );
};

export default Signup;
