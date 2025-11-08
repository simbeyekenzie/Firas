import Image from "next/image";
import React from "react";
import LandingPage from "./components/LandingPage";
import Lab from "@/components/Lab/Lab";
import { Hero, Section01 } from "./components";

export default function Home() {
  return (
    <>
      <Hero />
      <Section01 />
    </>
  );
}
