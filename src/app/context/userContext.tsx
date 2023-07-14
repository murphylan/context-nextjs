'use client';
import { createContext, useState } from 'react';

export type User = {
  name: string;
  email: string;
};

interface UserContextInterface {
  user: User;
}

const defaultUser: User = {
  name: '',
  email: '',
};

export const UserContext = createContext<UserContextInterface>({
  user: defaultUser,
});

type ChildrenType = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: ChildrenType) => {
  const [user, setUser] = useState<User>({
    name: 'billy',
    email: 'billy@email.com',
  });

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
