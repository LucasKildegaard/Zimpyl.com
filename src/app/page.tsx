import Image from "next/image";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/lib/image";

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

  // Forbedret logik: Hvis "Hero Overskrift (Linjer)" er tom, så brug "Hjemmeside Titel"
  let heroLines = pageData?.heroTitleLines;
  
  if (!heroLines || heroLines.length === 0) {
    heroLines = pageData?.title ? [pageData.title] : ["DETTE", "ER", "ZIMPYL"];
  }

  const introTitle = pageData?.introTitle || "I OVER TO ÅRTIER HAR VI ARBEJDET MED AMBITIØSE BRANDS FOR AT DEFINERE OG OPBYGGE DERES FORRETNING GENNEM DERES FYSISKE OMGIVELSER...";
  
  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="grid-12 items-center" style={{ height: "100%" }}>
            <div style={{ gridColumn: "span 6" }}>
              <img src="/PNG/ZIMPYL-logo-white.png" alt="Zimpyl Logo" style={{ height: "32px" }} />
            </div>
            
            <nav className="main-nav" style={{ gridColumn: "span 6", justifyContent: "flex-end" }}>
              <a href="#portefolje" className="nav-link">Portefølje</a>
              <a href="#proces" className="nav-link">Proces</a>
              <a href="#udtalelser" className="nav-link">Udtalelser</a>
              <button className="btn btn-primary" style={{ marginLeft: "24px" }}>BOOK ET OPKALD</button>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="hero container">
          <h1 className="hero-title">
            {heroLines.map((line: string, i: number) => (
              <span key={i}>{line}</span>
            ))}
          </h1>
        </section>

        <section className="section-intro py-section theme-light" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
          <div className="container">
            <div className="grid-12">
              <p className="font-secondary text-base font-regular" style={{ gridColumn: "1 / 13", marginTop: 0, marginBottom: "24px" }}>
                01. Introduktion
              </p>
              
              <h2 className="font-primary text-30 font-semibold" style={{ gridColumn: "1 / 11", textTransform: "uppercase", marginTop: 0, marginBottom: "24px" }}>
                {introTitle}
              </h2>
              
              <p className="font-secondary text-base font-regular" style={{ gridColumn: "7 / 10", margin: 0 }}>
                {pageData?.introText1 || "Fra den første idé til den endelige godkendelse er Outsource ved din side - og hjælper dig med at navigere i regler, byggeri, myndighedskrav og alt det andet, dit projekt måtte have brug for."}
              </p>
              
              <p className="font-secondary text-base font-regular" style={{ gridColumn: "10 / 13", margin: 0 }}>
                {pageData?.introText2 || "I samarbejde med Outsource Special Inspections, Inc. leverer vi en strømlinet, gennemgående proces — fra tilladelser og godkendelser til inspektioner og endelig godkendelse."}
              </p>
            </div>
          </div>
        </section>

        <section id="portefolje" className="section-portfolio py-section theme-dark" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
          <div className="container">
            <div className="grid-12">
              <p className="font-secondary text-base font-regular" style={{ gridColumn: "1 / 13", marginTop: 0, marginBottom: "80px", textTransform: "uppercase" }}>
                02. Portefølje
              </p>
              
              <div style={{ gridColumn: "1 / 13", display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "80px" }}>
                <h2 className="font-primary text-90 font-semibold" style={{ margin: 0, textTransform: "uppercase", whiteSpace: "nowrap" }}>SE VORES</h2>
                <h2 className="font-primary text-90 font-semibold" style={{ margin: 0, textTransform: "uppercase", whiteSpace: "nowrap" }}>ARBEJDE</h2>
              </div>
              
              {projects && projects.length > 0 ? (
                projects.map((project: any) => (
                  <div key={project._id} style={{ gridColumn: "span 4" }}>
                    {project.image && (
                      <img 
                        src={urlFor(project.image).url()} 
                        alt={project.title} 
                        style={{ width: "100%", height: "auto", display: "block", marginBottom: "24px", aspectRatio: "16/9", objectFit: "cover" }} 
                      />
                    )}
                    <p className="font-secondary text-base font-regular" style={{ margin: 0, lineHeight: 1.5 }}>
                      <span className="font-semibold">{project.title}</span> - {project.description}
                    </p>
                  </div>
                ))
              ) : (
                <>
                  <div style={{ gridColumn: "span 4" }}>
                    <img src="/PNG/mockup.png" alt="Eksempel" style={{ width: "100%", height: "auto", display: "block", marginBottom: "24px" }} />
                    <p className="font-secondary text-base font-regular" style={{ margin: 0, lineHeight: 1.5 }}>
                      <span className="font-semibold">Eksempel Projekt</span> - Du kan tilføje rigtige projekter i Sanity Studio.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        <section id="proces" className="section-proces py-section theme-light" style={{ paddingTop: "120px", paddingBottom: "120px", borderBottom: "1px solid #141314", position: "relative", overflow: "hidden" }}>
          <div className="container">
            <div className="grid-12">
              <div style={{ gridColumn: 3, gridRow: 1, position: "relative", zIndex: 0, pointerEvents: "none" }}>
                <div style={{ position: "absolute", right: "-12.5px", top: "-120px", height: "2000px", width: "1px", background: "#141314" }}></div>
              </div>
              
              <div style={{ gridColumn: "1 / 6", position: "relative", zIndex: 1 }}>
                <p className="font-secondary text-base font-regular" style={{ marginTop: 0, marginBottom: "80px", textTransform: "uppercase", color: "#141314" }}>
                  03. PROCES
                </p>
                <h2 className="font-primary text-90 font-semibold" style={{ margin: 0, lineHeight: 1, letterSpacing: "-0.02em", color: "#141314" }}>
                  Vores<br />
                  <span style={{ backgroundColor: "var(--color-primary-bg)", paddingRight: "16px" }}>proces er</span><br />
                  simpel
                </h2>
              </div>
              
              <div style={{ gridColumn: "6 / 9", display: "flex", flexDirection: "column", gap: "64px", marginTop: "110px", position: "relative", zIndex: 1 }}>
                {steps?.slice(0, 3).map((step: any) => (
                  <div key={step._id} className="step-item">
                    <p className="font-secondary text-30 font-regular" style={{ margin: "0 0 16px 0", color: "#141314" }}>{step.stepNumber}</p>
                    <p className="font-primary text-base font-semibold" style={{ margin: "0 0 16px 0", textTransform: "uppercase", color: "#141314" }}>{step.title}</p>
                    <p className="font-secondary text-base font-regular" style={{ margin: "0 0 24px 0", color: "#141314" }}>
                      {step.description}
                    </p>
                    <div style={{ width: "100%", height: "1px", background: "#141314" }}></div>
                  </div>
                )) || (
                  <div className="step-item">
                    <p className="font-secondary text-30 font-regular" style={{ margin: "0 0 16px 0", color: "#141314" }}>01.</p>
                    <p className="font-primary text-base font-semibold" style={{ margin: "0 0 16px 0", textTransform: "uppercase", color: "#141314" }}>OPDATER I SANITY</p>
                  </div>
                )}
              </div>

              <div style={{ gridColumn: "10 / 13", display: "flex", flexDirection: "column", gap: "64px", marginTop: "110px", position: "relative", zIndex: 1 }}>
                {steps?.slice(3, 6).map((step: any) => (
                  <div key={step._id} className="step-item">
                    <p className="font-secondary text-30 font-regular" style={{ margin: "0 0 16px 0", color: "#141314" }}>{step.stepNumber}</p>
                    <p className="font-primary text-base font-semibold" style={{ margin: "0 0 16px 0", textTransform: "uppercase", color: "#141314" }}>{step.title}</p>
                    <p className="font-secondary text-base font-regular" style={{ margin: "0 0 24px 0", color: "#141314" }}>
                      {step.description}
                    </p>
                    <div style={{ width: "100%", height: "1px", background: "#141314" }}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vi beholder udtalelser og resten som de er for nu, for at holde det overskueligt */}
        <section id="udtalelser" className="section-testimonials py-section theme-light" style={{ paddingTop: "64px", paddingBottom: "64px", borderBottom: "1px solid #141314", position: "relative", overflow: "hidden" }}>
          <div className="container">
            <div className="grid-12" style={{ marginBottom: "120px", position: "relative", zIndex: 1 }}>
              <p className="font-secondary text-base font-regular m-0" style={{ gridColumn: "1 / 6", color: "#141314", textTransform: "uppercase" }}>
                04. Udtalelser
              </p>
              <p className="font-secondary text-base font-regular m-0" style={{ gridColumn: "6 / 13", color: "#141314", textAlign: "right" }}>
                30. marts. 2026
              </p>
            </div>

            <div className="grid-12">
              <div style={{ gridColumn: 3, position: "relative", zIndex: 0, pointerEvents: "none" }}>
                <div style={{ position: "absolute", right: "-12.5px", top: "-500px", height: "2000px", width: "1px", background: "#141314" }}></div>
              </div>

              <div style={{ gridColumn: "1 / 6", position: "relative", zIndex: 1, paddingTop: "80px" }}>
                <h2 className="font-primary text-90 font-semibold" style={{ margin: "0 0 64px 0", lineHeight: 1, letterSpacing: "-0.02em", color: "#141314", display: "inline-block", backgroundColor: "var(--color-primary-bg)", paddingRight: "16px" }}>
                  IQ nordic
                </h2>
                
                <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#141314" }}></div>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", border: "2px solid #141314", boxSizing: "border-box" }}></div>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", border: "2px solid #141314", boxSizing: "border-box" }}></div>
                </div>
              </div>

              <div style={{ gridColumn: "6 / 12", position: "relative", zIndex: 1 }}>
                <h3 className="font-primary text-30 font-regular" style={{ margin: "0 0 100px 0", color: "#141314", lineHeight: 1.4 }}>
                  Vores samarbejde med Zimpyl, har vist sig at være meget givende ift. til at skabe en hjemmeside, der kommunikere præcist den identitet vi har som brand.
                </h3>
                
                <p className="font-secondary text-base font-regular" style={{ margin: 0, color: "#141314", lineHeight: 1.6 }}>
                  Peter Kildegaard<br />
                  Adm. direktør<br />
                  IQ nordic
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="signup" className="section-signup py-section theme-light" style={{ paddingTop: "64px", paddingBottom: "64px", borderBottom: "1px solid #141314", position: "relative", overflow: "hidden" }}>
          <div className="container">
            <div className="grid-12" style={{ marginBottom: "80px", position: "relative", zIndex: 1 }}>
              <p className="font-secondary text-base font-regular m-0" style={{ gridColumn: "1 / 6", color: "#141314", textTransform: "uppercase" }}>
                05. Sign up
              </p>
            </div>

            <div className="grid-12">
              <div style={{ gridColumn: 3, position: "relative", zIndex: 0, pointerEvents: "none" }}>
                <div style={{ position: "absolute", right: "-12.5px", top: "-500px", height: "2000px", width: "1px", background: "#141314" }}></div>
              </div>

              <div style={{ gridColumn: "1 / 7", position: "relative", zIndex: 1 }}>
                <div style={{ backgroundColor: "var(--color-primary-bg)", paddingTop: "16px", paddingBottom: "16px", marginTop: "-16px", marginBottom: "48px", display: "inline-block", position: "relative", zIndex: 1 }}>
                  <h2 className="font-primary text-90 font-semibold" style={{ margin: 0, lineHeight: 1, letterSpacing: "-0.02em", color: "#141314", paddingRight: "16px" }}>
                    Kom i gang
                  </h2>
                </div>
                
                <div style={{ width: "100%", backgroundColor: "var(--color-primary-bg)", paddingTop: "16px", paddingBottom: "16px", marginTop: "-16px", marginBottom: "-16px", position: "relative", zIndex: 1 }}>
                  <img src="/PNG/signup-sektion.png" alt="Zimpyl founders" style={{ width: "100%", height: "auto", display: "block", position: "relative", zIndex: 1 }} />
                </div>
              </div>

              <div style={{ gridColumn: "8 / 13", position: "relative", zIndex: 1, display: "flex", flexDirection: "column" }}>
                <h3 className="font-primary text-30 font-regular" style={{ margin: "0 0 100px 0", color: "#141314", lineHeight: 1.4 }}>
                  Book et 15 minutters opkald.<br />
                  Der er ingen behov for<br />
                  forberedelse
                </h3>
                
                <p className="font-secondary text-base font-regular" style={{ margin: "0 0 64px 0", color: "#141314" }}>
                  kontakt@zimpyl.com
                </p>

                <button className="btn btn-primary font-primary" style={{ alignSelf: "flex-start" }}>
                  BOOK ET OPKALD
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="site-footer py-section theme-dark" style={{ paddingTop: "64px", paddingBottom: "64px", position: "relative", overflow: "hidden", backgroundColor: "#141314", color: "#EEEEEE" }}>
        <div className="container">
          <div className="grid-12" style={{ marginBottom: "120px", position: "relative", zIndex: 1 }}>
            <p className="font-secondary text-base font-regular m-0" style={{ gridColumn: "1 / 5", color: "#EEEEEE" }}>
              06. FOOTER
            </p>
          </div>

          <div className="grid-12">
            <div style={{ gridColumn: 3, position: "relative", zIndex: 0, pointerEvents: "none" }}>
              <div style={{ position: "absolute", right: "-12.5px", top: "-500px", height: "2000px", width: "1px", background: "#EEEEEE" }}></div>
            </div>

            <div style={{ gridColumn: 9, position: "relative", zIndex: 0, pointerEvents: "none" }}>
              <div style={{ position: "absolute", right: "-12.5px", top: "-500px", height: "2000px", width: "1px", background: "#EEEEEE" }}></div>
            </div>

            <div style={{ gridColumn: "1 / 5", position: "relative", zIndex: 1 }}>
              <div style={{ backgroundColor: "#141314", paddingTop: "16px", paddingBottom: "16px", marginTop: "-16px", marginBottom: "64px", display: "inline-block", position: "relative", zIndex: 1 }}>
                <img src="/PNG/ZIMPYL-logo-white.png" alt="Zimpyl Logo" style={{ height: "90px", display: "block", paddingRight: "24px" }} />
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
                <p className="font-secondary text-base font-regular m-0" style={{ color: "#EEEEEE", lineHeight: 1.6 }}>
                  45+ 22 26 29 75<br />
                  Contact@zimpyl.dk
                </p>
                <p className="font-secondary text-base font-regular m-0" style={{ color: "#EEEEEE", lineHeight: 1.6 }}>
                  Esperlundvej 6<br />
                  8653 Them
                </p>
              </div>
            </div>

            <div style={{ gridColumn: "11 / 13", position: "relative", zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <nav style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
                <a href="#portefolje" className="font-secondary text-base font-regular" style={{ color: "#EEEEEE", textDecoration: "none" }}>Portefølje</a>
                <a href="#proces" className="font-secondary text-base font-regular" style={{ color: "#EEEEEE", textDecoration: "none" }}>Proces</a>
                <a href="#udtalelser" className="font-secondary text-base font-regular" style={{ color: "#EEEEEE", textDecoration: "none" }}>Udtalelser</a>
                <a href="#signup" className="font-secondary text-base font-regular" style={{ color: "#EEEEEE", textDecoration: "none" }}>sign up</a>
              </nav>
              
              <div style={{ marginTop: "64px" }}>
                <button className="btn btn-footer-cta font-primary">
                  BOOK DEMO
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: "1px", backgroundColor: "rgba(255, 255, 255, 0.4)", zIndex: -1 }}></div>
    </>
  );
}
