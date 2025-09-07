import React from 'react';

const Navbar = () => {
  return (
    <div className='flex justify-between p-4'>
      <h1 className='text-2xl font-bold'>Healthy Shop</h1>
      <ul className='flex items-center gap-4'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
