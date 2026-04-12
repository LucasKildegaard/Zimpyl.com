import Image from "next/image";

export default function Footer() {
  return (
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
              <Image 
                src="/PNG/ZIMPYL-logo-white.png" 
                alt="Zimpyl Logo" 
                width={394} 
                height={90} 
                style={{ objectFit: 'contain', height: '90px', width: 'auto', display: "block", paddingRight: "24px" }} 
              />
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
  );
}
