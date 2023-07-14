'use client';
import { useContext } from 'react';
import Login from './components/form/Login';
import Signup from './components/form/Signup';
import { UserProvider } from './context/userContext';
import useUser from './hooks/useUser';

export default function Home() {
  const user = useUser();
  console.log(user);

  return (
    <div>
      <h1 className='text-4xl font-bold'>Context API w/ Next.js</h1>

      <Login />
      <Signup />
    </div>
  );
}
