import React from 'react'
import { Button, Carousel, Typography } from "@material-tailwind/react";

const Car = () => {
  return (
    <>
      <Carousel
          className="max-w-[90vw] h-[500px] container mx-auto rounded-xl "
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <div className="relative h-full w-full">
            <img
              src="/car2.jpg"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/30 backdrop:blur-md">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  Farmer's Own Friend
                </Typography>
              </div>
            </div>
          </div>
          
          <div className="relative h-full w-full">
              <img
              src="/car6.jpg"
              alt="image 1"
              className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/30 backdrop:blur-md">
                  <div className="w-3/4 text-center md:w-2/4">
                      <Typography
                          variant="h1"
                          color="white"
                          className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                      >
                        Quality Crop Prediction
                      </Typography>

                      <div className="flex justify-center gap-2">
                          <Button size="lg" color="white">Explore</Button>
                          <Button size="lg" className="text-white">
                            Gallery
                          </Button>
                      </div>
                  </div>
              </div>
          </div>

          <img
            src="/car4.jpg"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="/car5.jpg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>

    </>

  )
}

export default Car