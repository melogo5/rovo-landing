import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Differentiation } from "@/components/sections/Differentiation";
import { Programs } from "@/components/sections/Programs";
import { FinalCta } from "@/components/sections/FinalCta";
import { SurveyForm } from "@/components/sections/SurveyForm";
import { Footer } from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Differentiation />
        <Programs />
        <FinalCta />
        <SurveyForm />
      </main>
      <Footer />
    </>
  );
}
