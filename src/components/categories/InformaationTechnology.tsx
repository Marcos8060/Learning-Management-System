import { technology } from "@/assets/data";
import Image from "next/image";
import React from "react";

const InformationTechnology = () => {
  return (
    <section className="grid md:grid-cols-3 grid-cols-1 gap-4">
      {technology.map((item, index) => (
        <div className="relative cursor-pointer" key={index}>
          <div
            className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent rounded-xl"
            style={{ zIndex: 1 }}
          ></div>
          <img
            className="rounded-xl h-[35vh] w-full object-cover"
            src={item.img}
            alt=""
          />
          <div className="absolute text-white bottom-4 left-4 z-10">
            <h2 className="text-xl">{item.name}</h2>
            <p className="text-xs font-thin">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, rerum.</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default InformationTechnology;
