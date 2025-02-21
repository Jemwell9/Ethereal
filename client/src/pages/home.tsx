import Hero from "@/components/hero";
import Partners from "@/components/partners";
import WhyChooseUs from "@/components/why-choose-us";
import Services from "@/components/services";
import Process from "@/components/process";
import Workshops from "@/components/workshops";
import Testimonials from "@/components/testimonials";
import ConceptManufacturing from "@/components/concept-manufacturing";
import Trainings from "@/components/trainings";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <WhyChooseUs />
      <Services />
      <Process />
      <Workshops />
      <Testimonials />
      <ConceptManufacturing />
      <Trainings />
    </main>
  );
}