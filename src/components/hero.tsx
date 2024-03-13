import React from "react";
import NavbarSection from "./navbar";
import Image from "next/image";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const HeroSection = () => {
  return (
    <section className="h-screen heroImg">
      <NavbarSection />
      <section className="md:flex items-center justify-between gap-4 h-[90vh] sm:px-20 px-4 py-20">
        <div className="md:w-1/2 w-full space-y-4">
          <p className="font-bold">Learn Online. Anywhere. Anytime.</p>
          <h1 className="uppercase text-5xl">
            Future of <br /> <span className="font-thin">Online</span>{" "}
            <span className="font-bold text-primary">Education</span>.
          </h1>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            repellat architecto recusandae vel sapiente harum veritatis
            voluptates molestias laborum inventore reiciendis amet, iure
            cupiditate, quo mollitia voluptatibus minus modi doloremque.
          </p>
          <button className="bg-black text-primary px-4 py-2 font-thin flex items-center gap-2">
            Learn More
            <HiOutlineArrowLongRight />
          </button>
        </div>
        <div className="md:block hidden">
          <div className="relative">
            <Image
              className="rounded-xl mx-auto"
              alt=""
              src="/learn.jpg"
              width={400}
              height={400}
            />
            <div className="absolute bg-primary bottom-4 right-72 p-4 rounded-xl space-y-2 w-56">
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
