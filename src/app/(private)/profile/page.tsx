'use client';

import api from '@/appwrite/api';
import React, { useEffect, useState } from 'react';
import useAuth from '@/app/hooks/useAuth';

type User = {
  name?: string;
  email: string;
  $createdAt: string;
  $updatedAt: string;
  emailVerification: boolean;
};

const ProfilePage = () => {
  const [user, setUser] = useState<User>();
  const auth = useAuth();

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await api.getAccount();
        auth.dispatch({ type: 'UPDATE', payload: response });
        console.log(response);
        setUser({ ...response });
      } catch (error: any) {
        console.error(error);
      }
    };

    getCurrentUser();
  }, []);

  return (
    <div>
      ProfilePage {user?.name || user?.email}
      <p>this should be a protected page</p>
    </div>
  );
};

export default ProfilePage;
