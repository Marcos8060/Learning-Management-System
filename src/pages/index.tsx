import CategorySection from "@/components/categories";
import FeaturedSection from "@/components/featured";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero";
import NavbarSection from "@/components/navbar";
import TestimonialSection from "@/components/testimonials";


export default function Home() {
  return (
    <>
    {/* <NavbarSection /> */}
    <HeroSection />
    <CategorySection />
    {/* <FeaturedSection /> */}
    <TestimonialSection />
    <FooterSection />
    </>
  );
}
