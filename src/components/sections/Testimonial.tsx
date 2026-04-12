export default function Testimonial() {
  return (
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
  );
}
