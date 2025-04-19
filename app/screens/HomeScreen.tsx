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
        <div>
            <CourselCard />
        </div>
    </div>
  )
}

export default HomeScreen;