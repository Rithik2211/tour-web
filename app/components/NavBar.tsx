import React from 'react';
import NavMenudropdown from './NavMenudropdown';
import NavLoginPopup from './NavLoginPopup';
import NavCurencyPopup from './NavCurencyPopup';

const NavBar = () => {
  return (
    <div className='w-full h-[55px] py-2 px-[30px] fixed flex justify-between items-center border-b-1 backdrop-blur-md'>
        <div className='flex flex-row justify-between items-center'>
            <h1 className='text-2xl font-semibold'>Travel Point</h1>
        </div>
        <div className='flex flex-row justify-between items-center gap-[10px] px-3'>
            <div className='flex flex-row justify-between items-center gap-[10px] px-3 w-[250px]'>
                <h1>About Us</h1>
                <h1>Become a Creator</h1>
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