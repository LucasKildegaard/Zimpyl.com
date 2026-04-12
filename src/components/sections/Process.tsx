interface ProcessProps {
  steps: any[];
}

export default function Process({ steps }: ProcessProps) {
  return (
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
  );
}
