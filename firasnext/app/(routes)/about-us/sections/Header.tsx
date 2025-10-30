'use client'
import React from 'react'
import {motion} from 'motion/react';
import { fadeIn } from '@/hooks/variants';

const Header = () => {
  return (
    <>
       {/* <!-- HERO --> */}
  <section className="about-her flex justify-center items-center min-h-screen">
    <div className="inner z-10 reveal-stagge text-center text-[#eaf8f0]">
      <motion.p 
        className=" mb-6 font-bold trackin-[.06em]"
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
          FIRAS Sunrise Farms
      </motion.p>
      <motion.h1 
        className="font-extrabold uppercase text-6xl mt-4 mr-0 mb-6"
        variants={fadeIn('up', 0.35)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <span className='text-[#ff7a1a]'>About</span> Us
      </motion.h1>
      <motion.p 
        className="mr-auto mb-8 max-w-[70ch] font-semibold"
        variants={fadeIn('up', 0.45)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        Wholesome food grown with respect for land, animals, and people since 2009.
      </motion.p>
      <motion.a 
        href="#intro" 
        className="border-[#eaf8f0] border-2 rounded-4xl py-[.85rem] px-6 font-bold"
        variants={fadeIn('up', 0.55)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        Learn More</motion.a>
    </div>
    <div className="absolute inset-0 z-0">
      <img  
        src="assets/images/farming-land.jpg"
        className="size-full object-cover"
        alt=" placeholder image"
      />
      <div className="absolute inset-0 bg-black/50" />
    </div> 
  </section>
  </>
  )
}
export default Header