"use client";
import React from "react";
// import Header from "../../../Components/Header";
import Footer from "../../../../Components/Footer";

import Abilities from "@/Components/Abilities";
import Hero from "@/Components/Home";
import Features from "@/Components/Features";
import Header from "@/Components/Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Abilities />
      <Footer />
    </>
  );
};

export default Dashboard;
