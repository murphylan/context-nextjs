'use client';

import { useState } from 'react';
import FormLayout from './components/form/FormLayout';
import Login from './components/form/Login';
import Signup from './components/form/Signup';
import useAuth from './hooks/useAuth';
import { account } from '@/appwrite/config';
import { useRouter } from 'next/navigation';

export default function Home() {
  const auth = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('billy@example.com');
  const [password, setPassword] = useState('test1234');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await account.createEmailSession(email, password);

      auth.dispatch({
        type: 'LOGIN',
        payload: { email: response.providerUid },
      });

      router.push('/profile');
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className='text-4xl font-bold'>Context API w/ Next.js</h1>

      <FormLayout
        email='email'
        password='password'
        onSubmit={e => handleLogin(e)}
      >
        <Login
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      </FormLayout>

      {/* <FormLayout>
        <Signup />
      </FormLayout> */}
    </div>
  );
}
