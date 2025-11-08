'use client'
import React from 'react'
import {motion} from 'motion/react';
import { fadeIn } from '@/hooks/variants';

const Section5 = () => {
  return (
    <>
      {/* <!-- LEADERSHIP --> */}
  <section className="section alt reveal">
    <div className="container">
      <h2 className="section-title">Our Team</h2>
      <p className="section-intro">A hands-on team focused on quality, consistency, and service.</p>

      <div className="people-grid reveal-stagger">
        <article className="person">
          <img src="./assets/images/leader-1.jpg" alt="Leader 1" />
          <div className="p-body">
            <h3>Chinyama Tembo</h3>
            <p className="role">Director</p>
            <p>Oversees operations, quality, and customer relationships across all product lines.</p>
          </div>
        </article>

        <article className="person">
          <img src="./assets/images/leader-2.jpg" alt="Leader 2" />
          <div className="p-body">
            <h3>Christine Miyoba</h3>
            <p className="role">Operations Lead</p>
            <p>Coordinates daily harvests, collections, and hygienic handling from farm to pack.</p>
          </div>
        </article>

        <article className="person">
          <img src="./assets/images/leader-3.jpg" alt="Leader 3" />
          <div className="p-body">
            <h3>Zibenji Moyo</h3>
            <p className="role">Supply & Delivery</p>
            <p>Manages cold-chain logistics and ensures on-time deliveries to homes and businesses.</p>
          </div>
        </article>
      </div>
    </div>
  </section>
    </>
  )
}

export default Section5