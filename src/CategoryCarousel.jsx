import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button"; // Assuming this is your custom Button
import React from "react";

const Category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "Fullstack Developer",
];

const CategoryCarousel = () => {
  return (
    <div className="w-full py-8 px-4 bg-white">
      <Carousel className="w-full">
        <CarouselContent>
          {Category.map((elem, index) => (
            <CarouselItem key={index} className="lg:basis-1/4 md:basis-1/2 p-4">
              <Button
                variant="outline"
                className="w-full px-6 py-2 rounded-full text-black font-medium hover:bg-gray-200 transition"
              >
                {elem}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
};

export default CategoryCarousel;