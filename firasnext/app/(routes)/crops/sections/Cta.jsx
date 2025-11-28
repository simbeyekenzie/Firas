"use client";

import { Button } from "@/components/ui/button"; 
import { motion } from "motion/react";
import { fadeIn } from "@/hooks/variants";
import React from "react";
import { useRouter } from "next/navigation";
import { MdJoinInner, MdOutlineTheaterComedy } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { IoIosHelpBuoy } from "react-icons/io";

export function Cta36() {
  const router = useRouter();
  return (
    <section id="jaz" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:gap-x-16">
          <motion.div 
            className="flex flex-col items-center justify-center text-center"
            variants={fadeIn('center', 0.2)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            <div>
              <MdJoinInner size={40}/>
            </div>
            <h2 className="rb-5 mb-5 text5xl leading-16 text-[clamp(1.5rem,4vw,10rem)] font-bold md:mb-6 md:text7xl lg:text8xl">
              Join our community
            </h2>
            <p>
              Stay updated with our latest harvests and sustainable farming
              practices
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button className="bg-orange rounded-[999px] hover:bg-orange-ligher" variant="primary" onClick={() => router.push("/contact")}>Subscribe</Button>
              <Button className="" variant="default" onClick={() => router.push("/contact")}>Learn more</Button>
            </div>
          </motion.div>
          <motion.div 
            className="flex  flex-col items-center justify-center text-center"
            variants={fadeIn('center', 0.3)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            <div>
              <IoIosHelpBuoy size={40}/>
            </div>
            <h2 className="rb-5 mb-5 text5xl leading-16 text-[clamp(1.5rem,4vw,10rem)] font-bold md:mb-6 md:text7xl lg:text8xl">
              Support local farming
            </h2>
            <p>Help us continue growing quality food for our community</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button className="bg-orange rounded-[999px] hover:bg-orange-ligher" variant="primary" onClick={() => router.push("/contact")}>Donate</Button>
              <Button variant="default" onClick={() => router.push("/contact")}>Get involved</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
// text-[clamp(1.2rem,2vw,3rem)]