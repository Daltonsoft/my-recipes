import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand: React.FC = () => {
  return (
    <NavLink to='/' className='flex'>
      <img
        className='flex'
        src='/media/logo.jpg'
        alt='my very awesome drawing'
        width='72'
        height='32'
      />
      <span>My Recipes...</span>
    </NavLink>
  );
};
