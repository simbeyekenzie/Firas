"use client";

import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import React, { useEffect, useState } from "react";
import { RxChevronRight } from "react-icons/rx";

const useCarousel = () => {
  const [api, setApi] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselPreviousClass = (index) => {
    return `z-30 size-12 ${index === 1 ? "hidden" : ""}`;
  };

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrentIndex(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return {
    api,
    setApi,
    carouselPreviousClass,
    currentIndex,
  };
};

export function Timeline18() {
  const useActive = useCarousel();
  return (
    <section
      
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Harvest</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Rhythm of the land and seasonal crop cycles
            </h2>
            <p className="md:text-md">
              Our farm follows the natural pulse of agricultural seasons. Each
              crop has its moment, carefully timed and expertly managed.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button title="View" variant="secondary">
                View
              </Button>
              <Button
                title="Details"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Details
              </Button>
            </div>
          </div>
        </div>
        <Carousel
          setApi={useActive.setApi}
          className="relative h-full overflow-hidden"
        >
          <div className="absolute left-0 z-20 h-full w-8 bg-gradient-to-r from-background-primary to-transparent lg:w-16" />
          <div className="absolute right-0 z-20 h-full w-8 bg-gradient-to-l from-background-primary to-transparent lg:w-16" />
          <CarouselContent className="ml-0">
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Jaz placeholder image 1"
                    className="w-full"
                  />
                </div>
                <div className="mb-4 mt-8 flex w-full items-center">
                  <div className="h-[3px] w-full bg-neutral-black" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-neutral-black" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    January
                  </h3>
                  <p>
                    Onion seeds planted, preparing fertile ground for early
                    spring growth and summer harvest.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Jaz placeholder image 2"
                    className="w-full"
                  />
                </div>
                <div className="mb-4 mt-8 flex w-full items-center">
                  <div className="h-[3px] w-full bg-neutral-black" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-neutral-black" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">March</h3>
                  <p>
                    Cucumber seedlings emerge, nurtured in greenhouse
                    environments before transplanting to open fields.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Jaz placeholder image 3"
                    className="w-full"
                  />
                </div>
                <div className="mb-4 mt-8 flex w-full items-center">
                  <div className="h-[3px] w-full bg-neutral-black" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-neutral-black" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">May</h3>
                  <p>
                    Okra plants begin their growth cycle, carefully monitored
                    for optimal development and yield.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Jaz placeholder image 4"
                    className="w-full"
                  />
                </div>
                <div className="mb-4 mt-8 flex w-full items-center">
                  <div className="h-[3px] w-full bg-neutral-black" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-neutral-black" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">July</h3>
                  <p>
                    Tomato vines heavy with ripening fruit, signaling the peak
                    of summer's agricultural abundance.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Jaz placeholder image 5"
                    className="w-full"
                  />
                </div>
                <div className="mb-4 mt-8 flex w-full items-center">
                  <div className="h-[3px] w-full bg-neutral-black" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-neutral-black" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    September
                  </h3>
                  <p>
                    Pumpkin and maize fields mature, preparing for autumn
                    harvest and collection.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Jaz placeholder image 6"
                    className="w-full"
                  />
                </div>
                <div className="mb-4 mt-8 flex w-full items-center">
                  <div className="h-[3px] w-full bg-neutral-black" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-neutral-black" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    November
                  </h3>
                  <p>
                    Carrot crops reach full maturity, ready for careful
                    extraction and preparation for market.
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious
            className={useActive.carouselPreviousClass(useActive.currentIndex)}
          />
          <CarouselNext className="z-30 size-12" />
        </Carousel>
      </div>
    </section>
  );
}
