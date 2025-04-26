'use client';
import React, { useState } from 'react'
import FilterPopup from '../components/FilterPopup';
import CategoryMenubar from '../components/CategoryMenu';
import CourselCard from '../components/CourselCard';

const HomeScreen = () => {
    const [homeCategory, setHomeCategory] = useState('all');
  return (
    <div className='h-screen w-full px-[20px] pt-[50px] flex flex-col'>
        <div className='flex flex-row justify-between items-center px-[20px]'>
            <div className='w-[550px]'>
                <CategoryMenubar setCategory={setHomeCategory} category={homeCategory}/>
            </div>
            <FilterPopup />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 mt-8'>
            {
                Array.from({ length: 20 }).map((_, index) => (
                    <div key={index} className='mb-4'>
                        <CourselCard />
                    </div>
                )
            )
            }
        </div>
    </div>
  )
}

export default HomeScreen;