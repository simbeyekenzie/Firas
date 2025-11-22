"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout522() {
  return (
    <section  className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Quality</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Our poultry production process
            </h2>
            <p className="md:text-md">
              Delivering premium eggs and meat through careful farming
              techniques.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <div className="relative p-6 text-text-alternative sm:col-span-2 md:p-8 lg:p-12">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Jaz placeholder image"
              />
            </div>
            <p className="mb-2 inline-block text-sm font-semibold">Fresh</p>
            <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
              Egg production standards
            </h3>
            <p>
              We ensure consistent quality and nutritional value in every egg.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button variant="secondary-alt">View details</Button>
              <Button
                iconRight={<RxChevronRight />}
                variant="link-alt"
                size="link"
              >
                Discover
              </Button>
            </div>
          </div>
          <div className="relative flex flex-col p-6 text-text-alternative md:p-8 lg:p-6">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Jaz placeholder image"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                className="size-12"
                alt="Jaz logo"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              Meat production excellence
            </h3>
            <p>Carefully raised broiler chickens for premium meat quality.</p>
            <div className="mt-5 flex items-center md:mt-6">
              <Button
                iconRight={<RxChevronRight />}
                variant="link-alt"
                size="link"
              >
                Learn more
              </Button>
            </div>
          </div>
          <div className="relative flex flex-col p-6 text-text-alternative md:p-8 lg:p-6">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Jaz placeholder image"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                className="size-12"
                alt="Jaz logo"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              Quality assurance process
            </h3>
            <p>
              Rigorous health checks and ethical farming practices guarantee
              superior products.
            </p>
            <div className="mt-5 flex items-center md:mt-6">
              <Button
                iconRight={<RxChevronRight />}
                variant="link-alt"
                size="link"
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
