import Features from "@/Components/Features";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Hero from "@/Components/Home";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default page;
