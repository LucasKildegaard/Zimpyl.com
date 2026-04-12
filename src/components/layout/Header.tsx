import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="grid-12 items-center" style={{ height: "100%" }}>
          <div style={{ gridColumn: "span 6" }}>
            <Image 
              src="/PNG/ZIMPYL-logo-white.png" 
              alt="Zimpyl Logo" 
              width={140} 
              height={32} 
              priority
              style={{ objectFit: 'contain', height: '32px', width: 'auto' }} 
            />
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
  );
}
