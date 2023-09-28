import React from "react";
import { NavBar } from "./navigation/desktop/NavBar";
import { MobileNavBar } from "./navigation/mobile/MobileNavBar";

interface Props {
  children: JSX.Element;
}

export const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <main className='flex flex-col min-h-screen w-full bg-gray-100 text-gray-700'>
      <header className='flex w-full items-center justify-center border-b-2 border-gray-200 bg-white p-2 flex-none'>
        <div className='flex justify-between w-full'>
          <NavBar />
        </div>
      </header>
      <nav className='flex-none hidden'>
        <MobileNavBar />
      </nav>
      <div className='flex w-full h-full items-center justify-between flex-grow'>{children}</div>
    </main>
  );
};
