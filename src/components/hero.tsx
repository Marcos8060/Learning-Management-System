import React from "react";
import NavbarSection from "./navbar";
import Image from "next/image";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const HeroSection = () => {
  return (
    <section className="h-screen">
      <NavbarSection />
      <section className="flex items-center gap-4 h-[90vh] p-20">
        <div className="w-1/2 space-y-4">
          <h1 className="uppercase text-4xl">
            Future of <br /> <span className="font-thin">Online</span>{" "}
            <span className="font-bold">Education.</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            eligendi commodi, nesciunt laborum eos odit inventore fugit
            praesentium ab maiores.
          </p>
          <button className="bg-black text-white px-4 py-2 font-thin flex items-center gap-2">
            Learn More
            <HiOutlineArrowLongRight />
          </button>
        </div>
        <div className="w-1/2 mx-auto">
          <div className="relative">
            <Image
              className="rounded-xl mx-auto"
              alt=""
              src="/learn.jpg"
              width={400}
              height={400}
            />
            <div className="absolute bg-primary bottom-4 right-96 p-4 rounded-xl space-y-2 w-56">
              <q className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                molestias.
              </q>
              <div className="block">
                <span className="text-xs">Carol Peters</span>
                <span className="text-xs block">Founder ABC Academy</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
