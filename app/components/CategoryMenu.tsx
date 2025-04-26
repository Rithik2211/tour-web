'use client';
import {
    Menubar,
    MenubarMenu
  } from "@/components/ui/menubar"
import { BookHeart, MessageSquareMore, NotebookText, Plane } from "lucide-react";
import { FC } from "react";

interface CategoryMenubarprops {
  setCategory : (e: string) => void;
  category: string;
}
  
 const  CategoryMenubar :FC<CategoryMenubarprops> = ({setCategory, category}) => {

    const categories = [
      {
        name : 'Travel Guides',
        category: 'travel',
        img : <NotebookText />
      },
      {
        name : 'Consultation',
        category: 'consult',
        img : <MessageSquareMore />
      },
      {
        name : 'Day Trips',
        category: 'trip',
        img : <Plane />
      },
      {
        name : 'Creators',
        category: 'creator',
        img : <BookHeart />
      },
    ]

    return (
      <Menubar className="h-auto flex justify-evenly items-center text-center mb-[4] bg-blue-50">
        {
          categories.map((menu, index) => (
            <MenubarMenu key={index}>
              <div className={`flex flex-col justify-center items-center bg-transparent gap-2 p-1 ${category === menu.category && 'border-b-3 border-b-black'}`} onClick={() => setCategory(menu.category)}>
                {menu.img}
                <label
                    htmlFor="terms"
                    className={`text-sm font-medium ${category === menu.category ? 'font-bold' : 'font-medium'} leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
                >
                    {menu.name}
                </label>
              </div>
            </MenubarMenu>
          ))
        }
      </Menubar>
    )
}  

export default CategoryMenubar;