'use client'
import React from 'react'
import {motion} from 'motion/react';
import { fadeIn } from '@/hooks/variants';
const values = [
  {
    title: 'Our Mission',
    content: "Deliver wholesome, fresh food, poultry, vegetables, and dairy, produced responsibly and delivered promptly."
  },
  {
    title: 'Quality',
    content: "Daily harvests and collections, careful sorting, and cold chain handling for safety and taste."
  },
  {
    title: 'Care',
    content: "Healthy birds, fertile soils, and clean facilities, we protect the land and respect our animals."
  },
  {
    title: 'Care',
    content: "Clear labeling, honest pricing, and reliable delivery that customers can trust."
  },
  {
    title: 'Community',
    content: "We support local households and businesses with consistent supply and responsive service."
  },
  {
    title: 'Safety',
    content: "Strict hygiene protocols from collection to packing and transport."
  },
]
const Section3 = () => {
  return (
    <>
      {/* <!-- MISSION & VALUES --> */}
      <section className="bg-mint py-[clamp(3rem,6vw,5rem)] px-4 ">
        <div className="max-w-[1200px] mx-auto py-0 px-[clamp(1rem,3vw,2rem)]">
          <motion.h2 
            className="section-title"
            variants={fadeIn('center', 0.2)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            Mission & Values</motion.h2>
          <motion.p 
            className="mr-auto mb-6 leading-[1.7] text-center "
            variants={fadeIn('center', 0.3)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            Clear purpose, consistent standards, and a promise to nourish families every day.</motion.p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {values.map((value, index) => {
              return (
                <motion.article 
                  key={index} 
                  className="bg-white p-5 border border-[#eee] shadow-md"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView="show"
                  exit='show'
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h3 className='font-bold '>{value.title}</h3>
                  <p>{value.content}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Section3