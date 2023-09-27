import React from "react";
import { NavBarBrand } from "./NavBarBrand";
import { NavBarTabs } from "./NavBarTabs";
import { NavBarButtons } from "./NavBarButtons";

export const NavBar: React.FC = () => {
  return (
    <nav className='flex flex-grow flex-shrink justify-between'>
      <NavBarBrand />
      <NavBarTabs />
      <NavBarButtons />
    </nav>
  );
};
