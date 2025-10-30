'use client'
import React from 'react'
import {color, motion} from 'motion/react';
import { fadeIn } from '@/hooks/variants';
import styles from './about.module.css';

const lists = [
  {
    title: 'Our Start',
    content: 'What began as a small effort has grown into a dependable food partner for homes and businesses.',

  },
  {
    title: "Our Focus",
    content: 'We care for animals, nurture healthy soils, and maintain hygienic handling from farm to pack.'
  },
  {
    title: "Our Promise",
    content: 'Fast, same-day delivery that keeps your meals fresh and wholesome.'
  },
]

const Section2 = () => {
  return (
    <>
      <section id="intro" className="bg-[#f7f4e8] place-items-centr min-h-screen  py-[clamp(3rem,6vw,5rem)] px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-center gap-10">
          <div className="flex items-center justify-between min-h-[520px] ">
            <div className="max-w-[560px]">
              <motion.p 
                className="font-bold text-[#9aa1a9] mb-5"
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                Who We Are
              </motion.p>
              <motion.h2 
                className="tracking-tight leading-12 font-extrabold text-[clamp(2rem,4vw,3.4rem)] mb-2.5"
                variants={fadeIn('up', 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                Rooted in Care, Growing with Purpose
              </motion.h2>                                                                                                 
              <motion.p 
                className="text-[#222] leading-[1.7] mb-4"
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                FIRAS Sunrise Farms grows and delivers farm-fresh poultry, vegetables, and dairy.
                We rise early, harvest at dawn, and handle everything cleanly so families receive nutritious food at its peak.
              </motion.p>
              <ul className="grid gap-4 p-0 m-0 ">
                {
                  lists.map((item, index) => {
                    const delay = index === 1 ? 0.45 : index === 2 ? 0.5 : 0.55;
                    return(
                    <motion.li 
                      key={index} 
                      className="grid gap-3 grid-cols-[auto_1fr]"
                      variants={fadeIn('up', delay)}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                    >
                      <div className="w-3.5 h-3.5 rounded-2xl bg-orange mt-2" ></div>
                      <div>
                        <div><strong>{item.title}</strong></div>
                        <span>{item.content}</span>
                      </div>
                    </motion.li>
                  )})
                }
              </ul>
            </div>
          </div>
          <motion.div 
            className="flex items-center justify-center "
            variants={fadeIn('up', 0.55)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <img className='rounded-t-2xl min-h-72' src="./assets/images/Cows And Sunsets.jpg" alt="Farm scene at sunrise" />
            <div className='absolute inset-0 '></div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Section2