"use client";
import React from "react";
import Hero from "./Hero";
import IndianStocks from "./IndianStocks";
import Privacy from "./Privacy";
import Education from "./Education";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <IndianStocks />
      <Education />
      <Privacy />
    </main>
  );
};

export default Homepage;
