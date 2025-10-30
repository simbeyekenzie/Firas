'use client'

import React from 'react'
import styles from "./landingPage.module.css";
import {motion} from 'motion/react';
import { fadeIn } from '@/hooks/variants';

const LandingPage = () => {
  return (
    <>
        {/* <!-- Hero --> */}
        <section className="hero">
          <div className="hero-bg">
            <img src="./assets/why-hero.JPG" alt="Chickens and eggs at sunrise on the farm" />
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
              className="hero-title"
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
                href="./about-us.html" 
                className="btn btn-ghost"
                variants={fadeIn('right', 0.55)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                About Us
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* <!-- ===================== POULTRY LANDING ===================== --> */}
        <section className="poultry-hero ">
          <div className="ph-wrap revea-stagger">
            <motion.div 
              className="ph-text"
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <p className="ph-eyebrow">Fresh Eggs for You</p>
              <h2 className="ph-title">EVERYDAY!</h2>
              <p className="ph-copy">
                Taste our delicious and nutritious eggs, raised with care, collected at sunrise, and delivered fresh.
              </p>
              <a href="poultry-products.html" className="btn btn-solid ph-cta">Our Products</a>
            </motion.div>
            <motion.div 
              className="ph-media"
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <img src="./assets/images/poultry-banner.PNG" alt="Chicks and eggs" />
            </motion.div>
          </div>
        </section>

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

        <section className="poultry-services revea">
          <div className="ps-wrap">
            <div className="ps-stage revea-stagger">
              {/* <!-- back video thumbnail --> */}
              <motion.a 
                className="ps-video" 
                href="https://example.com/farm-video" 
                target="_blank" 
                rel="noopener"
                variants={fadeIn('center', 0.3)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                <img src="./assets/images/videothumb2.jpg" alt="Watch our farm video" />
                <span className="play-btn">►</span>
              </motion.a>

              {/* <!-- overlapping eggs card --> */}
              <motion.div 
                className="ps-card"
                variants={fadeIn('center', 0.4)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                <img src="./assets/images/egg.PNG" alt="Eggs in a nest" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="poultry-about revea">
          <div className="pa-wrap revea-stagger">
            <motion.div 
              className="pa-text"
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <div className="pa-bgword">POULTRY</div>
              <h3>ABOUT POULTRY</h3>
              <p className="muted">FARM COMPANY</p>
              <p>
                From broilers to layers, our poultry program focuses on comfort, nutrition, and cleanliness to
                produce tender meat and strong shelled eggs.
              </p>
              <a href="./poultry-products.html" className="btn btn-solid">Our Products</a>
            </motion.div>
            <motion.div 
              className="pa-media"
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <img src="./assets/images/about-us.PNG" alt="Cracked egg" />
            </motion.div>
          </div>
        </section>
        {/* <!-- =================== /POULTRY LANDING ===================== --> */}

        {/* <!-- ===================== VEGETABLES LANDING ===================== --> */}
        <section className="vegetables-hero revea">
          <div className="vh-wrap revea-stagger">
            <motion.div 
              className="vh-media"
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <img src="./assets/vegetables.PNG" alt="Fresh vegetables" />
            </motion.div>
            <motion.div 
              className="vh-text"
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <p className="vh-eyebrow">From Sunrise Harvest</p>
              <h2 className="vh-title">VEGETABLES</h2>
              <p className="vh-copy">
                Seasonal greens and roots grown with care, harvested at dawn and packed for same-day delivery.
              </p>
              <a href="vegetables-products.html" className="btn btn-solid vh-cta">Our Products</a>
            </motion.div>
          </div>
        </section>

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

        <section className="vegetables-services revea">
          <div className="vs-wrap">
            <div className="vs-stage revea-stagger">
              {/* <!-- Card on the right now --> */}
              <motion.div 
                className="vs-card"
                variants={fadeIn('center', 0.3)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                <img src="./assets/images/vs-carrots.png" alt="Harvested vegetables in a basket" />
              </motion.div>

              {/* <!-- Video on the left --> */}
              <motion.a 
                className="vs-video" 
                href="https://example.com/veg-video" 
                target="_blank" 
                rel="noopener"
                variants={fadeIn('center', 0.4)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                <img src="./assets/images/tomatoes.PNG" alt="Vegetable farm video" />
                <span className="play-btn">►</span>
              </motion.a>
            </div>
          </div>
        </section>

        <section className="vegetables-about revea">
          <div className="va-wrap revea-stagger flex flex-col ">
            <motion.div 
              className="va-media"
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <img src="./assets/images/cucumber.PNG" alt="Vegetable field" />
            </motion.div>
            <motion.div 
              className="va-text"
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <div className="va-bgword">VEGETABLES</div>
              <h3>ABOUT VEGETABLES</h3>
              <p className="muted">FARM COMPANY</p>
              <p>
                From spinach to tomatoes, our vegetables are grown in fertile soils,
                harvested at peak freshness, and packed with nutrients.
              </p>
              <a href="./vegetables-products.html" className="btn btn-solid">Our Products</a>
            </motion.div>
          </div>
        </section>
        {/* <!-- =================== /VEGETABLES LANDING ===================== --> */}

        {/* <!-- ===================== DAIRY LANDING ===================== --> */}
        <section className="dairy-hero revea">
          <div className="ph-wrap revea-stagger">
            <motion.div 
              className="ph-text"
              variants={fadeIn('up', 0.4)}
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
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <img src="./assets/splash.PNG" alt="Cows and milk" />
            </motion.div>
          </div>
        </section>

        <section className="dairy-features revea" id="dairy-services">
          <div className="pf-wrap revea-stagger">
            <motion.div 
              className="pf-intro"
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <h3>QUALITY DAIRY</h3>
              <p className="muted">FRESH & PURE</p>
              <p>
                Our cows are pasture fed, well cared for, and milked daily to ensure freshness and nutritional value.
              </p>
              <a href="products.html" className="btn btn-outline">Our Ranch</a>
            </motion.div>

            <ul className="pf-grid">
              <motion.li 
                className="pf-item"
                variants={fadeIn('up', 0.5)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                {/* <!-- Cow Head Icon --> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"
                  fill="none" stroke="#ff7a1a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="32" cy="32" r="14"/>
                  <path d="M18 24c-4-2-6-6-6-10M46 24c4-2 6-6 6-10"/>
                  <circle cx="26" cy="30" r="2"/>
                  <circle cx="38" cy="30" r="2"/>
                </svg>
                <h4>Healthy Cows</h4>
                <p>Our cows are pasture raised, grass fed, and treated with care.</p>
              </motion.li>

              <motion.li 
                className="pf-item"
                variants={fadeIn('up', 0.7)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                {/* <!-- Milk Bottle Icon --> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"
                  stroke="#0f4d3f" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="22" y="10" width="20" height="44" rx="6"/>
                  <line x1="22" y1="18" x2="42" y2="18"/>
                </svg>
                <h4>Fresh Milk</h4>
                <p>Pure and creamy milk, bottled at the source for maximum freshness.</p>
              </motion.li>

              <motion.li 
                className="pf-item"
                variants={fadeIn('up', 0.9)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                {/* <!-- Cheese Wheel Icon --> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"
                  stroke="#0f4d3f" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="32" cy="32" r="20"/>
                  <path d="M32 12v40M12 32h40"/>
                </svg>
                <h4>Dairy Products</h4>
                <p>fresh and sour milk made with traditional farm methods.</p>
              </motion.li>

              <motion.li 
                className="pf-item"
                variants={fadeIn('up', 1.1)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                {/* <!-- Delivery Truck Icon --> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"
                  stroke="#0f4d3f" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="28" width="32" height="16"/>
                  <polyline points="36,28 52,28 60,36 60,44 36,44"/>
                  <circle cx="16" cy="44" r="4"/>
                  <circle cx="48" cy="44" r="4"/>
                </svg>
                <h4>Fast Delivery</h4>
                <p>Delivered fresh to your doorstep, keeping it cold and nutritious.</p>
              </motion.li>
            </ul>
          </div>
        </section>

        <section className="dairy-services revea">
          <div className="ps-wrap">
            <div className="ps-stage revea-stagger">
              {/* <!-- Video thumbnail --> */}
              <motion.a 
                className="ps-video" 
                href="https://example.com/dairy-video" 
                target="_blank" 
                rel="noopener"
                variants={fadeIn('center', 0.4)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                <img src="./assets/images/milk-jar.JPG" alt="Watch our dairy farm video" />
                <span className="play-btn">►</span>
              </motion.a>

              {/* <!-- overlapping card --> */}
              <motion.div 
                className="ps-card"
                variants={fadeIn('up', 0.5)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                <img src="./assets/images/milkplash.png" alt="Milk and cheese" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="dairy-about revea">
          <div className="pa-wrap reve-stagger">
            <motion.div 
              className="pa-text"
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <div className="pa-bgword">DAIRY</div>
              <h3>ABOUT DAIRY</h3>
              <p className="muted">FARM COMPANY</p>
              <p>
                Our dairy program ensures that every drop of milk is pure, nutritious, and sustainably sourced from happy cows.
              </p>
              <a href="./dairy-products.html" className="btn btn-solid">Our Products</a>
            </motion.div>
            <motion.div 
              className="pa-media"
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <img src="./assets/images/COW.png" alt="Milk jug and cheese" />
            </motion.div>
          </div>
        </section>
        {/* <!-- =================== /DAIRY LANDING ===================== --> */}

        <div className="footer-bottom zigzag reveal">
          © 2025 FIRAS Sunrise Farms. All rights reserved.
        </div>
    </>
  )
}

export default LandingPage
// <!-- Fade-in on scroll (IntersectionObserver) -->
  {/* <script>
    (() => {
      const els = document.querySelectorAll('.reveal, .reveal-stagger');
      if (!('IntersectionObserver' in window) || !els.length) return;

      const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classNameList.add('is-visible');
            obs.unobserve(entry.target); // reveal once
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });

      els.forEach(el => io.observe(el));
    })();
  </script> */}