'use client'
import React from 'react'
import {motion} from 'motion/react';
import { fadeIn } from '@/hooks/variants';

const Section3 = () => {
  return (
    <>
      {/* <!-- MISSION & VALUES --> */}
      <section className="section alt reveal">
        <div className="container">
          <h2 className="section-title">Mission & Values</h2>
          <p className="section-intro">Clear purpose, consistent standards, and a promise to nourish families every day.</p>

          <div className="mv-grid reveal-stagger">
            <article className="mv-card">
              <h3>Our Mission</h3>
              <p>Deliver wholesome, fresh food, poultry, vegetables, and dairy, produced responsibly and delivered promptly.</p>
            </article>
            <article className="mv-card">
              <h3>Quality</h3>
              <p>Daily harvests and collections, careful sorting, and cold chain handling for safety and taste.</p>
            </article>
            <article className="mv-card">
              <h3>Care</h3>
              <p>Healthy birds, fertile soils, and clean facilities, we protect the land and respect our animals.</p>
            </article>
            <article className="mv-card">
              <h3>Integrity</h3>
              <p>Clear labeling, honest pricing, and reliable delivery that customers can trust.</p>
            </article>
            <article className="mv-card">
              <h3>Community</h3>
              <p>We support local households and businesses with consistent supply and responsive service.</p>
            </article>
            <article className="mv-card">
              <h3>Safety</h3>
              <p>Strict hygiene protocols from collection to packing and transport.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section3