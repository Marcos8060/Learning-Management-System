import Experts from "@/components/experts";
import FooterSection from "@/components/footer";
import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <>
      <section className="aboutSection flex items-center justify-center">
        <div className="flex-col space-y-4">
          <div>
            <h1 className="font-bold text-5xl text-white">About Us</h1>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Link className="text-center text-white underline" href="/">
              Home
            </Link>
            <p className="text-white">/</p>
            <p className="text-[#FEB900]">For Students</p>
          </div>
        </div>
      </section>
      <section className="flex items-center gap-8 justify-between py-10 px-20">
        <div className="w-1/2 space-y-4">
          <div>
            <h1 className="text-4xl">
              Choose <span className="font-bold">Academia</span>.
            </h1>
            <div className="border-b-4 w-32 border-secondary"></div>
          </div>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Contrary to popular belief, Lorem
            Ipsum is not simply random text.
          </p>
          <p>
            It has roots in a piece of classical Latin literature from 45 BC,
            Making it over 2000 years old.
          </p>
        </div>
        <div className="">
          <section className="flex gap-4">
            <div>
              <img className="w-58 h-96 rounded-xl" src="/learn3.jpg" alt="" />
            </div>
            <div className="space-y-4">
              <img
                className="w-52 h-60 rounded-xl object-cover"
                src="/hero.jpg"
                alt=""
              />
              <img
                className="w-52 h-32 rounded-xl object-cover"
                src="/hero.jpg"
                alt=""
              />
            </div>
          </section>
        </div>
      </section>
      <section className="flex items-center">
        <div className="bg-primary w-1/2 p-20 h-[50vh] space-y-4">
          <h1 className="text-4xl font-bold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi.
          </h1>
          <div>
            <button className="">Read More</button>
            <div className="border-b-2 border-secondary w-16"></div>
          </div>
        </div>
        <div className="w-1/2">
          <img className="h-[50vh] w-full" src="/learn1.jpg" alt="" />
        </div>
      </section>
      <Experts />
      <FooterSection />
    </>
  );
};

export default AboutSection;
