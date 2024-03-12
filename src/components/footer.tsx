import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";


const FooterSection = () => {
  return (
    <footer className="bg-secondary text-white px-10 py-20">
      <section className="flex gap-4 justify-between">
        <div className="space-y-4">
          <h1 className="text-xl">About</h1>
          <p className="text-sm font-thin">
            Academist is dedicated to constant learning & knowledge sharing.
          </p>
          <div className="flex items-center gap-4">
            <FaLocationDot className="text-primary" />
            <p className="text-xs">Kirichwa Road, Kilimani Business Centre, Nairobi, Kenya</p>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="text-primary" />
            <p className="text-xs">+254 716 666 862</p>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-xl">Popular Courses</h1>
          <ul className="font-thin text-sm space-y-2">
            <li>Machine Learning</li>
            <li>Data Science</li>
            <li>Leadership Skills</li>
          </ul>
        </div>
        <div className='space-y-4'>
          <h1 className="text-xl">Support</h1>
          <ul className="font-thin text-sm space-y-2">
            <li>About Us</li>
            <li>Registration</li>
            <li>Available Courses</li>
          </ul>
        </div>
        <div className='text-center space-y-4'>
          <h1 className="text-xl">Flexible Learning</h1>
          <img src="/world.png" alt="" />
        </div>
      </section>
    </footer>
  );
};

export default FooterSection;
