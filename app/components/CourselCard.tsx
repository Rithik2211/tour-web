import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const CourselCard = () => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const CourselData = [
    '/img1.jpg', '/img2.jpg', '/img3.jpg', '/img4.jpg', '/img5.jpg'
  ]

  return (
    <div className="mx-auto max-w-xs">
      <Carousel opts={{ loop: true }} setApi={setApi} className="w-full max-w-xs">
        <CarouselPrevious className="z-10 absolute top-45 left-2"/>
        <CarouselNext className="z-10 absolute top-45 right-2"/>
        <h1 className= "z-10 absolute top-8 left-8 py-0.5 px-3 rounded-[18px] bg-white text-black text-sm font-medium flex flex-row gap-1"><Star className="text-yellow-500 w-5 h-5"/> Top Rated </h1>
        <CarouselContent>
          {CourselData.map((data, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="aspect-square overflow-hidden">
                    <img  src={data} className="object-cover h-full w-full rounded-[8px]"/>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="py-2 text-center text-sm text-muted-foreground z-10 absolute bottom-0 left-2 right-2">
            Slide {current} of {count}
        </div>
      </Carousel>
    </div>
  )
}

export default CourselCard