import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'

const SelectCurrencyDrawer = () => {
    return (
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a Curreny" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Currency</SelectLabel>
              <SelectItem value="apple">USD</SelectItem>
              <SelectItem value="banana">Yen</SelectItem>
              <SelectItem value="blueberry">Rs</SelectItem>
              <SelectItem value="grapes">Euro</SelectItem>
              <SelectItem value="pineapple">Dhirams</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      )
}

export default SelectCurrencyDrawer