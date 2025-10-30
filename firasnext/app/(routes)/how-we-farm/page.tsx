'use client'
import React from 'react'
import styles from './howWeFarm.module.css';

const HowWeFarm = () => {
  return (
    <>
      {/* <!-- HERO --> */}
      <section className="min-h-screen min-w-screen overscroll-x-none w-ful bg-[#5a5f66] flex items-center justify-center flex-col">
        <img src="./assets/log.PNG" alt="Farm workers tending fields" />
        <div className="flex flex-col">
          <p className="text-[#eaf8f0] mb-16 font-bold trackin-[.06em]">FIRAS Sunrise Farms</p>
          <h1 className=''>How We Farm</h1>
          <p className="su">Sustainable methods. Clean production. Freshness from sunrise to delivery.</p>
          <a href="products.html" className="btn btn-solid">Explore Our Produce</a>
        </div>
      </section>

      {/* <!-- ROW 1 --> */}
      <section className="section">
        <div className="row flip reveal">
          <div className="media"><img src="./assets/images/soil.jpg" alt="Healthy soil" /></div>
          <div className="text">
            <div className="text-inner">
              <p className="kicker">Healthy Soil</p>
              <h2 className="h2">We Start with the Ground</h2>
              <p className="lead">Crop rotation, compost enrichment and minimal tilling keep the land fertile year-round.</p>
              <ul className="bullets">
                <li className="bullet"><div className="dot"></div><div><strong>Compost-rich beds</strong><span>Organic matter builds structure and flavor.</span></div></li>
                <li className="bullet"><div className="dot"></div><div><strong>Natural pest balance</strong><span>Beneficial insects and inter-cropping reduce sprays.</span></div></li>
                <li className="bullet"><div className="dot"></div><div><strong>Water-smart irrigation</strong><span>Efficient drip systems conserve every drop.</span></div></li>
              </ul>
            </div>
          </div>
        </div>

      {/* <!-- ROW 2 --> */}
        <div className="row pale reveal">
          <div className="media"><img src="./assets/images/welfare.jpg" alt="Happy animals" /></div>
          <div className="text">
            <div className="text-inner">
              <p className="kicker">Animal Welfare</p>
              <h2 className="h2">Comfort Breeds Quality</h2>
              <p className="lead">Clean housing, space, and balanced diets create calm, productive animals.</p>
              <ul className="bullets">
                <li className="bullet"><div className="dot"></div><div><strong>Spacious barns</strong><span>Proper airflow and natural light promote health.</span></div></li>
                <li className="bullet"><div className="dot"></div><div><strong>Nutritious feed</strong><span>Custom mixes ensure energy and growth balance.</span></div></li>
                <li className="bullet"><div className="dot"></div><div><strong>Routine checks</strong><span>Trained staff monitor flocks daily.</span></div></li>
              </ul>
            </div>
          </div>
        </div>

      {/* <!-- ROW 3 --> */}
        <div className="row flip reveal">
          <div className="media"><img src="./assets/images/hygiene-farm.jpg" alt="Hygiene standards" /></div>
          <div className="text">
            <div className="text-inner">
              <p className="kicker">Hygiene First</p>
              <h2 className="h2">Clean Processes, Safe Food</h2>
              <p className="lead">From milking sheds to egg trays, we maintain strict cleanliness and temperature control.</p>
              <ul className="bullets">
                <li className="bullet"><div className="dot"></div><div><strong>Sanitized stations</strong><span>Daily disinfection keeps pathogens out.</span></div></li>
                <li className="bullet"><div className="dot"></div><div><strong>Protective gear</strong><span>Staff use gloves, boots, and aprons at all times.</span></div></li>
                <li className="bullet"><div className="dot"></div><div><strong>Traceability</strong><span>Every batch is labeled and tracked.</span></div></li>
              </ul>
            </div>
          </div>
        </div>

      {/* <!-- ROW 4 --> */}
        <div className="row pale reveal">
          <div className="media"><img src="./assets/images/delivery-team.jpg" alt="Farm delivery" /></div>
          <div className="text">
            <div className="text-inner">
              <p className="kicker">From Farm to You</p>
              <h2 className="h2">Quick & Reliable Delivery</h2>
              <p className="lead">Orders leave our distribution center daily for freshness at your doorstep.</p>
              <ul className="bullets">
                <li className="bullet"><div className="dot"></div><div><strong>Early dispatch</strong><span>Trucks roll out before noon to preserve cool chain.</span></div></li>
                <li className="bullet"><div className="dot"></div><div><strong>Local reach</strong><span>We cover markets, restaurants, and homes nearby.</span></div></li>
                <li className="bullet"><div className="dot"></div><div><strong>Customer care</strong><span>Our team follows up on each delivery.</span></div></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HowWeFarm
