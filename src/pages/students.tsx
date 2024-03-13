import FooterSection from "@/components/footer";
import NavbarSection from "@/components/navbar";
import TestimonialSection from "@/components/testimonials";
import Image from "next/image";
import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Students = () => {
  return (
    <>
      <section className="h-screen heroImg">
        <NavbarSection />
        <section className="flex items-center justify-between gap-4 h-[90vh] p-20">
          <div className="w-1/2 space-y-4">
            <p className="font-bold">Learn Online. Anywhere. Anytime.</p>
            <h1 className="text-5xl">
              Find a Perfect <br /> <span className="font-thin">Mentor</span>{" "}
              for your <span className="font-bold text-primary">Talent</span>.
            </h1>
            <p className="text-sm">
              Choose out of 2500+ mentors. Trusted by 250k users. Industry
              experts and top university professors.
            </p>
            <button className="bg-black text-white px-4 py-2 font-thin flex items-center gap-2">
              Learn More
              <HiOutlineArrowLongRight />
            </button>
          </div>
          <div className="">
            <div className="relative">
              <Image
                className="rounded-xl mx-auto h-[80vh]"
                alt=""
                src="/learn3.jpg"
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
        <section className="p-20">
          <div className="space-y-8">
            <h1 className="text-4xl text-center">
              A Social network for Instructors and Students
            </h1>
            <p className="text-center">
              Choose out of 2500+ mentors. Trusted by 250k users. Industry
              experts and top university professors.
            </p>
          </div>
          <section className="flex items-center gap-4 justify-between my-12">
            <div className="w-5/12 space-y-4">
              <h1 className="text-5xl font-bold">
                Improve your coding skills by building realistic projects.
              </h1>
              <p className="text-sm font-thin">
                Our professionally designed challenges help you gain hands-on
                experience writing HTML, CSS, and JavaScript. We create the
                designs so you can focus on the code and see your skills
                skyrocket!
              </p>
            </div>
            <div className="w-7/12 mx-auto">
              <img src="/coding.webp" alt="" />
            </div>
          </section>
        </section>
        <section className="flex">
          <div className="w-1/2">
            <img src="/hero.jpg" alt="" />
          </div>
          <div className="p-10 space-y-4 flex items-center justify-center">
            <div>
              <h2 className="text-xl font-semibold text-center">
                Built on Modern Web Technologies.
              </h2>
              <p className="text-sm text-center">
                Progressive web app framework. Extract a mobile app from the
                site.
              </p>
            </div>
          </div>
        </section>
        <section className="flex">
          <div className="p-20 w-1/2 space-y-4">
            <h2>Built on Modern Web Technologies.</h2>
            <p className="text-3xl">
              WPLMS is “the” learning management software for future. The vision
              and the future is amazing.
            </p>
          </div>
          <div className="w-1/2">
            <img src="/learn1.jpg" alt="" />
          </div>
        </section>
        <TestimonialSection />
        <FooterSection />
      </section>
    </>
  );
};

export default Students;
