import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand: React.FC = () => {
  return (
    <NavLink to='/' className='flex'>
      <img
        className='flex'
        src='https://cdn.auth0.com/blog/hub/code-samples/hello-world/auth0-logo.svg'
        alt='Auth0 shield logo'
        width='122'
        height='36'
      />
      <span>My Recipes...</span>
    </NavLink>
  );
};
