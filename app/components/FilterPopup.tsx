
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { SlidersHorizontal } from 'lucide-react'
import React from 'react'
import SelectCurrencyDrawer from './SelectCurrencyDrawer';
import CategoryMenubar from './CategoryMenu';

const languageValue = [
    "Spanish", "English", "Potuguese", "Deutsch", "Francias", "Italiano", "Nederlands", "Tamil", "Kannada", 'Malayalam'
]

const FilterPopup = () => {
    return (
        <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline">
                <SlidersHorizontal /> Filters
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] pt-[40px] rounded-[20px]">
          <CategoryMenubar />
          <DialogTitle>Price Range</DialogTitle>
          <div className='grid grid-cols-2 gap-4'>
          {
            languageValue.map((item, index) => 
                <div key={index} className='border-1 py-3 px-6 text-center rounded-[8px]'>
                    <h1 className='text-black font-bold'>{item}</h1>
                </div>
            )
          }
          </div>
          <DialogFooter>
            <Button className='w-full'>Apply</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      )
}

export default FilterPopup