import { Checkbox } from '@/components/ui/checkbox';
import React, { FC } from 'react'

interface CheckBoxProps {
    Data : any[];
    count ?: number;
}

const CheckBox :FC<CheckBoxProps> = ({Data, count=0}) => {
  return (
    <>
        {
            Data.map((lang, index) => (
                <div key={index} className="flex items-center space-x-2 py-2">
                    <Checkbox id="terms" />
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        {`${lang} (${count})`}
                    </label>
                </div>
            ))
        }
    </>
  )
}

export default CheckBox;