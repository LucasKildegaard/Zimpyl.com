import Image from "next/image";

export default function SignUp() {
  return (
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
            
            <div style={{ width: "100%", backgroundColor: "var(--color-primary-bg)", paddingTop: "16px", paddingBottom: "16px", marginTop: "-16px", marginBottom: "-16px", position: "relative", zIndex: 1, aspectRatio: '4/3' }}>
              <Image 
                src="/PNG/signup-sektion.png" 
                alt="Zimpyl founders" 
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
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
  );
}
