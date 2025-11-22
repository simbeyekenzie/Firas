import React from 'react'
import styles from "./landingPage.module.css";

const Layout07 = () => {
  return (
    <>
      <section className="vegetables-features revea" id="veg-services">
        <div className="vf-wrap revea-stagger">
          <ul className="vf-grid">
            <motion.li 
              className="vf-item"
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48" height="48"
                fill="none" stroke="#ff7a1a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 44c6-6 14-6 20 0s14 6 20 0"/>
                <path d="M32 52V28"/>
                <path d="M20 20c0 6 12 12 12 12s12-6 12-12a12 12 0 0 0-24 0z"/>
              </svg>
              <h4>Organic Growth</h4>
              <p>We use minimal inputs and careful soil management for healthy plants.</p>
            </motion.li>
            <motion.li 
              className="vf-item"
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48" height="48"
                fill="none" stroke="#ff7a1a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="32" cy="20" r="6"/>
                <line x1="32" y1="8" x2="32" y2="4"/>
                <line x1="32" y1="32" x2="32" y2="36"/>
                <line x1="20" y1="20" x2="16" y2="20"/>
                <line x1="44" y1="20" x2="48" y2="20"/>
                <path d="M8 44c8-4 16-4 24 0s16 4 24 0"/>
                <path d="M8 52c8-4 16-4 24 0s16 4 24 0"/>
              </svg>
              <h4>Sunrise Harvest</h4>
              <p>Picked at first light to lock in nutrients and freshness.</p>
            </motion.li>
            <motion.li 
              className="vf-item"
              variants={fadeIn('up', 0.9)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48" height="48"
                  fill="none" stroke="#ff7a1a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <rect x="12" y="24" width="40" height="28" rx="4" ry="4"/>
                <path d="M20 24l6-12h12l6 12"/>
                <line x1="20" y1="36" x2="44" y2="36"/>
              </svg>
              <h4>Farm to Basket</h4>
              <p>Clean handling and sorting for immediate delivery to families.</p>
            </motion.li>
            <motion.li 
              className="vf-item"
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
              <p>Vegetables dispatched the same day they are picked.</p>
            </motion.li>
          </ul>

          <motion.div 
            className="vf-intro"
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            <h3>FRESH VEGETABLES</h3>
            <p className="muted">NATURAL & CLEAN</p>
            <p>
              At FIRAS Sunrise Farms, vegetables are our pride. Grown with care,
              harvested at dawn, and delivered at their freshest.
            </p>
            <a href="#veg-services" className="btn btn-outline">Our Gardens</a>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Layout07