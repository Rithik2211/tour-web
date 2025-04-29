import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import React from 'react'

const Support = () => {
  return (
    <div className='h-screen w-full px-[20px] pt-[50px]'>
        <div className='flex flex-col w-full mt-[20px]'>
          <div className=''>

          </div>
          <div className=''>
            <Button className='bg-black rounded-[20px]'><Search /> Search</Button>
          </div>
        </div>
    </div>
  )
}

export default Support;