import React from "react";
import Image from "next/image";
import { featuredCourses } from "../assets/data";
import { FaUser } from "react-icons/fa";

const FeaturedSection = () => {
  return (
    <section className="py-10 px-20 h-screen">
      <h1 className="text-2xl">Featured Courses</h1>
      <section className="flex items-center justify-center gap-4 my-4">
        {featuredCourses.map((item, index) => (
          <div className="p-1 mx-auto" key={index}>
            <div className="relative items-center justify-center overflow-hidden cursor-pointer">
              <Image
                className="rounded h-[50vh] object-cover hover:scale-105 transition-all duration-500"
                src={item.img}
                alt=""
                width={400}
                height={200}
              />
              <div className="bg-blue bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 text-white p-2 absolute bottom-8 right-0">
                <h1>{item.name}</h1>
              </div>
            </div>
            <p className="text-sm my-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              quod enim hic quia perspiciatis nostrum neque corporis eius alias
              error.
            </p>
            <div className="flex items-center gap-4">
              <FaUser />
              <small>{item.students} Students Enrolled</small>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default FeaturedSection;
