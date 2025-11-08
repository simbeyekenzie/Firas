import React from "react";
import { Layout01 } from "./components/Layout01";
import { Layout02 } from "./components/Layout02";
import { Layout03 } from "./components/Layout03";
import { Stats } from "./components/Stats";
import { Team6 } from "./components/Team6";
import Hero from "./components/Hero";

export default function Page() {
  return (
    <div>
      {/* <Navbar1 /> */}
      {/* <Header64 /> */}
      <Hero />
      <Layout01 />
      <Layout02 />
      <Layout03 />
      <Stats />
      <Team6 />
      {/* <Footer2 /> */}
    </div>
  );
}
