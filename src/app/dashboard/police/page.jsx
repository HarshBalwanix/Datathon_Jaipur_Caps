import AdminAbilities from "@/Components/AdminAbilities";
import AdminHero from "@/Components/AdminHero";
import AdminView from "@/Components/AdminView";
import Footer from "@/Components/Footer";
import React from "react";

const page = () => {
  return (
    <div>
      <AdminHero />
      <AdminAbilities />
      <AdminView />
      <Footer />
    </div>
  );
};

export default page;
