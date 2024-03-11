import React, { useState,useRef,useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Drawer from "./drawer";
import Link from "next/link";

const NavbarSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBackground, setNavBackground] = useState(false);

  const navRef = useRef<boolean>();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 40;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="flex items-center justify-between sm:px-16 px-4 sticky top-0 z-50"
      style={{
        transition: "1s ease",
        backgroundColor: navBackground ? "#000000" : "#FFFFFF",
      }} 
      >
        <div className="py-4">
          <Link href="/" className="">
            <h1 className="text-2xl font-bold">Logo</h1>
          </Link>
        </div>
        <nav className="md:block hidden py-6">
          <ul className="flex items-center gap-8">
            <li className="">
              <Link href="#about" className="">For Students</Link>
            </li>
            <li className="">
              <Link href="#experience" className="">How it Works</Link>
            </li>
          </ul>
        </nav>
        <div>
          <button className="">Login</button>
        </div>
        <div className="md:hidden block py-4">
          <AiOutlineMenu
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
          <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </section>
    </>
  );
};

export default NavbarSection;