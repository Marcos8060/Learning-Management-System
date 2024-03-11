import React, { useState, useEffect } from "react";
import { testimonial } from "@/assets/data";

// OWL CAROUSEL
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const TestimonialSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const testimonials = {
    loop: true,
    margin: 0,
    nav: false,
    center: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 8000,
    responsive: {
      0: {
        items: 1,
        center: true,
        dots: false,
        nav: false,
      },
      480: {
        items: 1,
        center: false,
        dots: false,
      },
      769: {
        items: 3,
      },
    },
  };

  return (
    <>
      <section className="sm:px-12 px-2 sm:py-16 py-8">
        <h1 className="text-center text-4xl">Testimonials</h1>
        <div className="my-12">
          <OwlCarousel {...testimonials}>
            {testimonial.map((item, index) => (
              <div key={index} className="bg-primary sm:px-12 px-2 space-y-4 py-2 sm:py-4 slider-card h-[30] mt-12">
                <img
                  style={{ maxWidth: "80px", height: "80px" }}
                  className="sm:-mt-8 -mt-4 mx-auto rounded-full object-cover"
                  src={item.img}
                  alt=""
                />
                <p className={`text-center text-xs`}>{item.name}</p>
                <p className="text-center pb-4" style={{ fontSize: "9px" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;