'use client';

import Login from './components/form/Login';
import Signup from './components/form/Signup';

export default function Home() {
  return (
    <div>
      <h1 className='text-4xl font-bold'>Context API w/ Next.js</h1>

      <Login />
      <Signup />
    </div>
  );
}
