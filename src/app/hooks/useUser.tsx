// functions: login, logout, signup
// track user's status - regardless of the pages
// tracking loading status - determing if user is logged in

'use client';

import { useContext } from 'react';
import { UserContext } from '../context/userContext';

const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }

  return context;
};

export default useUser;
