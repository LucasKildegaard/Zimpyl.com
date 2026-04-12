interface IntroProps {
  title: string;
  text1: string;
  text2: string;
}

export default function Intro({ title, text1, text2 }: IntroProps) {
  return (
    <section className="section-intro py-section theme-light" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
      <div className="container">
        <div className="grid-12">
          <p className="font-secondary text-base font-regular" style={{ gridColumn: "1 / 13", marginTop: 0, marginBottom: "24px" }}>
            01. Introduktion
          </p>
          
          <h2 className="font-primary text-30 font-semibold" style={{ gridColumn: "1 / 11", textTransform: "uppercase", marginTop: 0, marginBottom: "24px" }}>
            {title}
          </h2>
          
          <p className="font-secondary text-base font-regular" style={{ gridColumn: "7 / 10", margin: 0 }}>
            {text1}
          </p>
          
          <p className="font-secondary text-base font-regular" style={{ gridColumn: "10 / 13", margin: 0 }}>
            {text2}
          </p>
        </div>
      </div>
    </section>
  );
}
