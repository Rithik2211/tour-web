import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Globe } from 'lucide-react'
import React from 'react'
import SelectCurrencyDrawer from './SelectCurrencyDrawer';

const languageValue = [
    "Spanish", "English", "Potuguese", "Deutsch", "Francias", "Italiano", "Nederlands", "Tamil", "Kannada", 'Malayalam'
]

const NavCurencyPopup = () => {
    return (
        <Dialog>
        <DialogTrigger asChild>
            <Button variant="ghost" className='bg-transparent'><Globe className='text-black'/></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Choose a Curreny</DialogTitle>
          </DialogHeader>
          <SelectCurrencyDrawer />
          <DialogTitle>Choose a Language</DialogTitle>
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

export default NavCurencyPopup