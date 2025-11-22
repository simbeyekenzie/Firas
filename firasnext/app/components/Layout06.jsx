import React from 'react'
import styles from "./landingPage.module.css";

const Layout06 = () => {
  return (
    <>
      <section className="poultry-features revea" id="services">
        <div className="pf-wrap revea-stagger">
          <motion.div 
            className="pf-intro"
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            <h3>QUALITY POULTRY</h3>
            <p className="muted">FRIENDLY SERVICE</p>
            <p>
              We raise layers and broilers in clean, well managed housing and collect eggs daily for peak freshness.
            </p>
            <a href="products.html" className="btn btn-outline">Our Poultry</a>
          </motion.div>

          <ul className="pf-grid">
            <motion.li 
              className="pf-item"
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"
                fill="none" stroke="#ff7a1a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 40c0-10 6-18 16-18s16 8 16 18-6 16-16 16-16-6-16-16z"/>
                <path d="M52 38l8 4-8 4z"/>
                <path d="M34 20c0-4 2-8 6-10-2 4 2 6 2 10 2-4 6-6 8-6-2 2-2 6 0 8"/>
                <circle cx="38" cy="38" r="2" fill="#ff7a1a"/>
              </svg>
              <h4>The Best Hens</h4>
              <p>Healthy layers raised on balanced feed with plenty of clean water.</p>
            </motion.li>
            <motion.li 
              className="pf-item"
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" stroke="#0f4d3f" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="22" cy="36" rx="12" ry="16"/>
                <ellipse cx="42" cy="32" rx="12" ry="16"/>
              </svg>
              <h4>Organic Eggs</h4>
              <p>Strong shells, rich yolks, collected and sorted each morning.</p>
            </motion.li>
            <motion.li 
              className="pf-item"
              variants={fadeIn('up', 0.9)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" stroke="#0f4d3f" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="20" r="6"/>
                <path d="M2 44c10-6 20-6 30 0s20 6 30 0"/>
                <path d="M2 54c10-6 20-6 30 0s20 6 30 0"/>
              </svg>
              <h4>Our Farms</h4>
              <p>Clean housing, good airflow, and routine flock health checks.</p>
            </motion.li>
            <motion.li 
              className="pf-item"
              variants={fadeIn('up', 1.1)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" stroke="#0f4d3f" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="24" width="28" height="16"/>
                <polyline points="32,24 48,24 56,32 56,40 32,40"/>
                <circle cx="16" cy="44" r="4"/>
                <circle cx="44" cy="44" r="4"/>
                <line x1="10" y1="18" x2="2" y2="18"/>
                <line x1="14" y1="12" x2="2" y2="12"/>
              </svg>
              <h4>Fast Delivery</h4>
              <p>Same day dispatch so your family always enjoys fresh food.</p>
            </motion.li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Layout06