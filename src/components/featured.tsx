import React from "react";
import { featuredCourses } from "../assets/data";

const FeaturedSection = () => {
  return (
    <section className="py-10 sm:px-20 px-4 md:h-screen h-auto">
      <h1 className="text-2xl">Featured Courses</h1>
      <div className="border-b-4 border-secondary w-32"></div>
      {featuredCourses.map((item, index) => (
        <section
          key={index}
          className="md:flex items-center justify-center gap-4 my-4 space-y-4"
        >
          <div className="md:w-4/12 space-y-2">
            <h1 className="text-xl font-bold">{item.category}</h1>
            <p className="text-sm">{item.desc}</p>
          </div>
          <div className="md:w-8/12 md:flex items-center gap-4 md:space-y-0 space-y-4">
            {item.images.map((img, index) => (
              <div className="md:w-4/12 relative" key={index}>
                <div
                  className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent rounded-xl overflow-hidden"
                  style={{ zIndex: 1 }}
                ></div>
                <img className="rounded h-40 w-full object-cover" src={img.img} alt="" />
                <div className="absolute text-white bottom-4 left-4 z-10">
                  <h2 className="uppercase text-sm">{img.name}</h2>
                  <p style={{fontSize: '10px'}} className="font-thin">{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </section>
  );
};

export default FeaturedSection;
