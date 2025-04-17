'use client';
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { SlidersHorizontal } from 'lucide-react'
import React, { useState } from 'react'
import CategoryMenubar from './CategoryMenu';
import CheckBox from './CheckBox';
import SliderComp from './Slider';

const languageValue = [
    "Spanish", "English", "Potuguese", "Deutsch", "Francias", "Italiano", "Nederlands", "Tamil", "Kannada", 'Malayalam'
]

const salesValue = ["Discount", "Pre-Sale"]

const badgesValue = ["Local", "Top Rated", "Trending", "Popular", "Best Seller"]

const FilterPopup = () => {

    const [priceCount, setPriceCount] = useState(0);

    return (
        <Dialog >
        <DialogTrigger asChild>
            <Button variant="outline" className='py-4 h-[45px]'>
                <SlidersHorizontal /> Filters
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] max-h-[600px] overflow-y-scroll pt-[40px] rounded-[20px]">
          <CategoryMenubar />

          <DialogTitle className='pt-[10px]'>Price Range</DialogTitle>
          <div className='flex flex-col gap-3'>
            <div className=''>
                <div className='w-full py-6 px-2'>
                    <SliderComp value={[priceCount]} onValueChange={(value: number[]) => setPriceCount(value[0])}/>
                </div>
                <div className='flex flex-row justify-between items-center w-full px-2 py-3 gap-3'>
                    <div className='bg-gray-200 p-2 rounded-[12px] flex flex-col items-center'>
                        <span className='text-sm font-medium'>Min Price (EURO)</span>
                        <span>{0}</span>
                    </div>
                    <div className='bg-gray-200 p-2 rounded-[12px] flex flex-col items-center'>
                        <span className='text-sm font-medium'>Max Price (EURO)</span>
                        <span>{100}</span>
                    </div>
                </div>
            </div>
          </div>

          <DialogTitle>Sales</DialogTitle>
          <div className='grid grid-cols-2 gap-2 pb-[10px]'>
            <CheckBox Data={salesValue} />
          </div>
          <DialogTitle>Badges</DialogTitle>
          <div className='grid grid-cols-2 gap-2 pb-[10px]'>
            <CheckBox Data={badgesValue} />
          </div>
          <DialogTitle>Languages</DialogTitle>
          <div className='grid grid-cols-2 gap-2 pb-[10px]'>
            <CheckBox Data={languageValue} />
          </div>

          <DialogFooter className='flex justify-between items-center gap-3 w-full'>
            <Button variant="outline">Clear All</Button>
            <Button>Apply</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      )
}

export default FilterPopup