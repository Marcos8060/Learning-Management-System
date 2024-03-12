import { experts } from "@/assets/data";
import React from "react";

const Experts = () => {
  return (
    <section className="px-20 py-10 space-y-4 h-[80vh]">
      <div className="text-center">
        <h3>Our Expertise</h3>
        <h1 className="font-bold text-2xl">
          Special crafted courses Learn from Industry experts
        </h1>
      </div>
      <section className="flex items-center gap-4 justify-between">
        {experts.map((item, index) => (
          <div className="p-1 mx-auto" key={index}>
            <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
              <div className="bg-gray rounded">
                <img
                  className="duration-700 h-60 object-cover transition-transform"
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="bg-primary font-semibold py-2 duration-500 opacity-90 absolute inset-0 flex-flex-col items-center justify-center px-2 text-center translate-y-[85%] group-hover:translate-y-[0%] transition-all">
                <p className="text-black font-semibold text-sm mb-4">
                  {item.name}
                </p>
                <div className="space-y-4">
                  <p className="text-black">{item.field}</p>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla, debitis! Nesciunt temporibus recusandae iste deserunt
                    tempore voluptate, illum cum magnam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Experts;
