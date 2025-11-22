import Image from "next/image";
import React from "react";
import LandingPage from "./components/LandingPage";
import Lab from "@/components/Lab/Lab";
import { Hero, Layout01, Layout02, Layout03, Stats, Team6 } from "./components";

export default function Home() {
  return (
    <>
      <Hero />
      <Layout01 />
      <Layout02 />
      <Layout03 />
      <Stats />
      <Team6 />
    </>
  );
}
