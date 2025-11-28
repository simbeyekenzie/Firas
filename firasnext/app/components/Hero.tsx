'use client'

import React from 'react'
import {motion} from 'motion/react';
import { fadeIn } from '@/hooks/variants';
import styles from "./landingPage.module.css";
import Image from 'next/image';


const Hero = () => {
  return (
    <section id='JazSystems
    ' className={styles.hero}>
      <div className="hero-bg">
        <Image
          width={800}
          height={800}
          src="/assets/why-hero.JPG" 
          alt="Chickens and eggs at sunrise on the farm" />
        <div className="overlay"></div>
      </div>
      <div className="hero-inner revea-stagger">
        <motion.div 
          className="sale-tag"
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          FARM FRESH
        </motion.div>
        <motion.h1 
          className="hero-title font-poppins"
          variants={fadeIn('up', 0.35)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          FIRAS Sunrise Farms
          <span className="outline">Poultry • Dairy • Vegetables</span>
        </motion.h1>
        <motion.p 
          className="hero-sub"
          variants={fadeIn('up', 0.45)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          Fresh from the sunrise to your table, nourishing families with premium poultry, eggs, vegetables and dairy.
        </motion.p>

        <motion.div className="hero-actions">
          <motion.a 
            href="#" 
            className="btn btn-solid"
            variants={fadeIn('left', 0.55)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Contact
          </motion.a>
          <motion.a 
            href="/products" 
            className="btn btn-ghost"
            variants={fadeIn('right', 0.55)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Products
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero