import { cn } from '@/lib/utils';
import React from 'react'

type SliderProps = React.ComponentProps<typeof Slider>
const Slider = ({ className, ...props }: SliderProps) => {
    return (
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          className={cn("w-[60%]", className)}
          {...props}
        />
      )
}

export default Slider;