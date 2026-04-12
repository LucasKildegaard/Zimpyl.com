import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface PortfolioProps {
  projects: any[];
}

export default function Portfolio({ projects }: PortfolioProps) {
  return (
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
                  <div style={{ width: "100%", position: "relative", aspectRatio: "16/9", marginBottom: "24px" }}>
                    <Image 
                      src={urlFor(project.image).url()} 
                      alt={project.title} 
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: "cover" }} 
                    />
                  </div>
                )}
                <p className="font-secondary text-base font-regular" style={{ margin: 0, lineHeight: 1.5 }}>
                  <span className="font-semibold">{project.title}</span> - {project.description}
                </p>
              </div>
            ))
          ) : (
            <>
              <div style={{ gridColumn: "span 4" }}>
                <div style={{ width: "100%", position: "relative", aspectRatio: "16/9", marginBottom: "24px" }}>
                  <Image 
                    src="/PNG/mockup.png" 
                    alt="Eksempel" 
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }} 
                  />
                </div>
                <p className="font-secondary text-base font-regular" style={{ margin: 0, lineHeight: 1.5 }}>
                  <span className="font-semibold">Eksempel Projekt</span> - Du kan tilføje rigtige projekter i Sanity Studio.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
