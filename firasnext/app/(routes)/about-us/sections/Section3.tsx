'use client'
import React from 'react'
import {motion} from 'motion/react';
import { fadeIn } from '@/hooks/variants';

const Section4 = () => {
  return (
    <>
        {/* <!-- OUR STORY --> */}
<section className="our-story reveal" id="our-story">
  <div className="os-wrap">
    <div className="os-text">
      <h2 className="os-title">
        <span>Our </span><b>Story</b>
      </h2>

      <p className="os-intro">
        From modest beginnings to a multi-line farm operation serving families every day.
        We still rise at dawn to harvest, collect, sort and deliver at peak freshness.
      </p>

      <ol className="os-timeline reveal-stagger">
        <li>
          <div className="os-year">2009</div>
          <div className="os-copy">Started small with sunrise harvests and a commitment to quality and care.</div>
        </li>
        <li>
          <div className="os-year">2017</div>
          <div className="os-copy">Expanded operations across poultry and vegetables, improving handling and delivery.</div>
        </li>
        <li>
          <div className="os-year">Today</div>
          <div className="os-copy">Added dairy, strengthened hygiene standards, and built a reliable distribution network.</div>
        </li>
      </ol>
    </div>

    <figure className="os-media">
      {/* <!-- Swap to your photo --> */}
      <img src="./assets/images/our-story.jpg" alt="FIRAS Sunrise Farms through the years" />
    </figure>
  </div>
</section>
    </>
  )
}

export default Section4