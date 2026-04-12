import { client } from "@/sanity/lib/client";

// Components
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Testimonial from "@/components/sections/Testimonial";
import SignUp from "@/components/sections/SignUp";

// GROQ Queries
const PAGE_QUERY = `*[_type == "page"][0]`;
const PROJECTS_QUERY = `*[_type == "project"] | order(order asc)`;
const STEPS_QUERY = `*[_type == "step"] | order(order asc)`;

export const dynamic = "force-dynamic";

export default async function Home() {
  // Fetch data uden cache for live opdateringer
  const pageData = await client.fetch(PAGE_QUERY);
  const projects = await client.fetch(PROJECTS_QUERY);
  const steps = await client.fetch(STEPS_QUERY);

  // Fallback data
  let heroLines = pageData?.heroTitleLines;
  if (!heroLines || heroLines.length === 0) {
    heroLines = pageData?.title ? [pageData.title] : ["DETTE", "ER", "ZIMPYL"];
  }

  const introTitle = pageData?.introTitle || "I OVER TO ÅRTIER HAR VI ARBEJDET MED AMBITIØSE BRANDS FOR AT DEFINERE OG OPBYGGE DERES FORRETNING GENNEM DERES FYSISKE OMGIVELSER...";
  const introText1 = pageData?.introText1 || "Fra den første idé til den endelige godkendelse er Outsource ved din side - og hjælper dig med at navigere i regler, byggeri, myndighedskrav og alt det andet, dit projekt måtte have brug for.";
  const introText2 = pageData?.introText2 || "I samarbejde med Outsource Special Inspections, Inc. leverer vi en strømlinet, gennemgående proces — fra tilladelser og godkendelser til inspektioner og endelig godkendelse.";

  return (
    <>
      <Header />
      
      <main>
        <Hero heroLines={heroLines} />
        <Intro title={introTitle} text1={introText1} text2={introText2} />
        <Portfolio projects={projects} />
        <Process steps={steps} />
        <Testimonial />
        <SignUp />
      </main>

      <Footer />
      
      {/* Global baggrunds-midterlinje */}
      <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: "1px", backgroundColor: "rgba(255, 255, 255, 0.4)", zIndex: -1 }}></div>
    </>
  );
}
