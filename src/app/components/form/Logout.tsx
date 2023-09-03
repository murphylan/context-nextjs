'use client';

import api from '@/appwrite/api';
import React from 'react';

const Logout = () => {
  const handleLogout = async () => {
    try {
      const response = await api.deleteCurrentSession();
      console.log('logged out');
      console.log(response);
    } catch (error: any) {
      console.error('Unable to logout', error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
