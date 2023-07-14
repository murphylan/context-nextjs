import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-rose-700 text-white mb-4'>
      <div className='w-full max-w-5xl mx-auto px-4 py-2'>
        <ul className='flex gap-x-8'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          {/* hide dashboard page if user is not logged in */}
          <li>
            <Link href='/dashboard'>Dashboard</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
