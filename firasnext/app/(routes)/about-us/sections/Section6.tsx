'use client'
import React from 'react'
import {motion} from 'motion/react';
import { fadeIn } from '@/hooks/variants';

const Section6 = () => {
  return (
    <>
        {/* <!-- CLIENTS / PARTNERS --> */}
      <section className="section reveal">
        <div className="container">
          <h2 className="section-title">Clients & Partners</h2>
          <p className="section-intro">Trusted by retailers, producers, and community organizations.</p>

          <div className="logos reveal-stagger">
            <img src="./assets/images/partner-1.png" alt="Partner 1" />
            <img src="./assets/images/partner-2.png" alt="Partner 2" />
            <img src="./assets/images/partner-3.png" alt="Partner 3" />
            <img src="./assets/images/partner-4.png" alt="Partner 4" />
          </div>
        </div>
      </section>

      {/* <!-- CTA --> */}
      <section className="cta reveal">
        <div className="container">
          <h2>Get in Touch</h2>
          <p>Have a question or want to place an order? We’re ready to help.</p>
          <a href="contact.html" className="btn btn-solid">Contact Us</a>
        </div>
      </section>
    </>
  )
}

export default Section6