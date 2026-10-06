import React from "react";
import { services } from "@/constants";
import ServiceCard from "./ServiceCard";
import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";

function Services() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 my-16" id="services">
      <div className="text-center">
        <p className="sectionSubText">Skillset</p>
        <h2 className="sectionHeadText">Technical Expertise.</h2>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
