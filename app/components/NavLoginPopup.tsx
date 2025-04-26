import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const NavLoginPopup = () => {
  return (
    <Dialog>
    <DialogTrigger asChild>
        <Button variant="outline" className='bg-blue-50'>Login</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Log In</DialogTitle>
        <DialogDescription>
          Start exploring world by connecting!
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="email" className="text-right">
            Email
          </Label>
          <Input id="email" value="abc@gmail.com" className="col-span-3" readOnly />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Username
          </Label>
          <Input id="username" value="Sam" className="col-span-3" readOnly/>
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Login</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  )
}

export default NavLoginPopup