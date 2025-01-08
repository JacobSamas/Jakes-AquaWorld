import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: 'AquaWorld - Home of Exquisite Fish',
  description: 'Discover the most exquisite fish for your aquarium!',
};


export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
    </div>
  );
}
