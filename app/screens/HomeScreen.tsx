import React from 'react'
import FilterPopup from '../components/FilterPopup';
import CategoryMenubar from '../components/CategoryMenu';

const HomeScreen = () => {
  return (
    <div className='h-screen w-full px-[20px] flex flex-col '>
        <div className='flex flex-row justify-between items-center px-[20px] '>
            <div className='w-[550px]'>
                <CategoryMenubar />
            </div>
            <FilterPopup />
        </div>
        <div>

        </div>
    </div>
  )
}

export default HomeScreen;