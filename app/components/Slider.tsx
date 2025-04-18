import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import React from 'react'

type SliderProps = React.ComponentProps<typeof Slider>
const SliderComp = ({ className, ...props }: SliderProps) => {
    return (
        <Slider
          defaultValue={[40]}
          max={100}
          step={1}
          className={cn("w-full", className)}
          {...props}
        />
      )
}

export default SliderComp;