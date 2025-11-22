'use client'

import React from 'react'
import styles from '../../../components/landingPage.module.css';
import { fadeIn } from "@/hooks/variants";
import { motion } from "motion/react";

const Layout022 = () => {
  return (
    <>
      <section className="py-16 revea">
        <div className="ph-wrap revea-stagger">
          <motion.div 
            className="ph-text"
            variants={fadeIn('center', 0.2)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            <p className="ph-eyebrow">Fresh Milk for You</p>
            <h2 className="ph-title">EVERYDAY!</h2>
            <p className="ph-copy">
              Taste our wholesome dairy products, pure, creamy, and packed with natural goodness, delivered straight from the farm.
            </p>
            <a href="./dairy-products.html" className="btn btn-solid ph-cta">Our Products</a>
          </motion.div>
          <motion.div 
            className="ph-media"
            variants={fadeIn('center', 0.28)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            <img src="./assets/splash.PNG" alt="Cows and milk" />
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Layout022