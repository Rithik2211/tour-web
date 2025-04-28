'use client';
import React from 'react';
import NavMenudropdown from './NavMenudropdown';
import NavLoginPopup from './NavLoginPopup';
import NavCurencyPopup from './NavCurencyPopup';
import { useRouter } from 'next/navigation'; 

const NavBar = () => {
    const navigate = useRouter();

    const handleNavigate = (path : string) => {
        navigate.push(path);
    }

  return (
    <div className='w-full h-[55px] py-2 px-[30px] fixed flex justify-between items-center border-b-1 backdrop-blur-md z-3'>
        <div className='flex flex-row justify-between items-center'>
            <h1 className='text-2xl font-semibold' onClick={() => handleNavigate('/')}>Travel Point</h1>
        </div>
        <div className='flex flex-row justify-between items-center gap-[10px] px-3'>
            <div className='flex flex-row justify-between items-center px-3 w-[180px]'>
                <h1 className='cursor-pointer' onClick={() => handleNavigate('/screens/AboutUs')}>About Us</h1>
                <h1 className='cursor-pointer' onClick={() => handleNavigate('/screens/Support')}>Support</h1>
            </div>
            <div className='flex flex-row justify-between items-center gap-[10px] px-3'>
                <NavLoginPopup />
                <NavCurencyPopup />
                <NavMenudropdown />
            </div>
        </div>
    </div>
  )
}

export default NavBar;