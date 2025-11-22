"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout141() {
  return (
    <section  className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Legacy</p>
              <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Growing strong since 2009
              </h2>
              <p className="md:text-md">
                Firas Sunrise Farms began with a simple dream of sustainable
                agriculture. We've grown into a diverse farming enterprise.
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button title="Our story" variant="secondary">
                  Our story
                </Button>
                <Button
                  title="Read"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Read
                </Button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              className="size-full object-cover"
              alt="Jaz placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
