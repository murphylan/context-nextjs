'use client';

import { useState } from 'react';
import FormLayout from './components/form/FormLayout';
import Login from './components/form/Login';
import Logout from './components/form/Logout';
import Signup from './components/form/Signup';
import useAuth from './hooks/useAuth';

export default function Home() {
  const user = useAuth();
  console.log(user);

  return (
    <div>
      <h1 className='text-4xl font-bold'>Context API w/ Next.js</h1>

      <FormLayout>
        <Login />
      </FormLayout>

      <FormLayout>
        <Signup />
      </FormLayout>
    </div>
  );
}
