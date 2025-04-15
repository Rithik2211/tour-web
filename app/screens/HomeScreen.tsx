import React from 'react'
import FilterPopup from '../components/FilterPopup';

const HomeScreen = () => {
  return (
    <div className='h-screen w-full px-[20px] flex flex-col'>
        <div className='flex flex-row justify-between items-center px-[20px]'>
            <div className=''>

            </div>
            <FilterPopup />
        </div>
    </div>
  )
}

export default HomeScreen;