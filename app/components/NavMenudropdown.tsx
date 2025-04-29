'use client';
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BookHeart, LogIn, Menu, PersonStanding, Plane, Telescope } from "lucide-react";
import NavLoginPopup from "./NavLoginPopup";
import { useRouter } from "next/navigation";

const NavMenudropdown = () => {
  const navigate = useRouter();

    const handleNavigate = (path : string) => {
        navigate.push(path);
    }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className='bg-transparent'><Menu className='text-black'/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-3">
        <DropdownMenuLabel onClick={() => handleNavigate('/')}>Travel Point</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => handleNavigate('/screens/AboutUs')}>
            <PersonStanding />About Us
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Telescope />Start Exploring
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BookHeart /> Become a Creator
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Plane /> Make a Travel
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className=''> 
          <LogIn/> Login
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default NavMenudropdown;