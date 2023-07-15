import React from 'react';

type Props = {
  children: React.ReactNode;
  email: string;
  password: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const FormLayout = ({ children, email, password, onSubmit }: Props) => {
  return (
    <form
      className='border border-rose-700 w-96 flex flex-col gap-y-8 p-4 mx-auto my-8'
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

export default FormLayout;
