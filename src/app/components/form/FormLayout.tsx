import React from 'react';

type Props = {
  children: React.ReactNode;
};

const FormLayout = ({ children }: Props) => {
  return (
    <form className='border border-rose-700 w-96 flex flex-col gap-y-8 p-4 mx-auto my-8'>
      {children}
    </form>
  );
};

export default FormLayout;
