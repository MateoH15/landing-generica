import Link from "next/link";

export default function Home() {
  return (
    <div style={{ fontFamily: "'Georgia', serif", color: "#2c2c2c", background: "#faf8f5" }}>

      {/* NAV */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.2rem 2.5rem",
        background: "#1a1a1a",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <Link href="/" style={{
          color: "#d4a853",
          fontSize: "1.5rem",
          fontWeight: "bold",
          letterSpacing: "2px",
          textDecoration: "none",
        }}>
          🍽 La Bella Tavola
        </Link>
        <nav aria-label="Navegación principal" style={{ display: "flex", gap: "2rem" }}>
          {[
            { label: "Inicio", href: "#" },
            { label: "Menú", href: "#menu" },
            { label: "Nosotros", href: "#features" },
            { label: "Reservas", href: "#reservas" },
          ].map(({ label, href }) => (
            <Link key={label} href={href} style={{
              color: "#ccc",
              textDecoration: "none",
              fontSize: "0.95rem",
              letterSpacing: "1px",
            }}>
              {label}
            </Link>
          ))}
        </nav>
      </nav>

      {/* HERO */}
      <section
        aria-labelledby="hero-heading"
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #3a2a1a 100%)",
          color: "#fff",
          textAlign: "center",
          padding: "7rem 2rem",
        }}
      >
        <p style={{ color: "#d4a853", letterSpacing: "4px", fontSize: "0.85rem", marginBottom: "1rem" }}>
          COCINA ITALIANA AUTÉNTICA
        </p>
        <h1 id="hero-heading" style={{ fontSize: "3.5rem", fontWeight: "bold", margin: "0 0 1.2rem", lineHeight: 1.2 }}>
          Una experiencia<br />que nunca olvidarás
        </h1>
        <p style={{ color: "#ccc", fontSize: "1.1rem", maxWidth: "500px", margin: "0 auto 2.5rem" }}>
          Sabores tradicionales de Italia, preparados con ingredientes frescos y mucho amor. Bienvenido a La Bella Tavola.
        </p>
        <Link href="#reservas" style={{
          display: "inline-block",
          background: "#d4a853",
          color: "#1a1a1a",
          padding: "0.9rem 2.5rem",
          borderRadius: "4px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "1rem",
          letterSpacing: "1px",
        }}>
          Reservar una Mesa
        </Link>
      </section>

      {/* FEATURES */}
      <section id="features" aria-labelledby="features-heading" style={{ padding: "5rem 2rem", textAlign: "center", background: "#fff" }}>
        <p style={{ color: "#d4a853", letterSpacing: "3px", fontSize: "0.8rem", marginBottom: "0.5rem" }}>POR QUÉ ELEGIRNOS</p>
        <h2 id="features-heading" style={{ fontSize: "2rem", marginBottom: "3rem" }}>Lo mejor de cada plato</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "3rem", flexWrap: "wrap" }}>
          {[
            { icon: "🌿", title: "Ingredientes frescos", desc: "Seleccionados diariamente del mercado local." },
            { icon: "👨‍🍳", title: "Chef experto", desc: "Más de 20 años de experiencia en cocina italiana." },
            { icon: "🍷", title: "Carta de vinos", desc: "Selección premium de vinos italianos y argentinos." },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{ maxWidth: "220px" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }} aria-hidden="true">{icon}</div>
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>{title}</h3>
              <p style={{ color: "#777", lineHeight: 1.6, fontSize: "0.95rem" }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MENU HIGHLIGHT */}
      <section id="menu" aria-labelledby="menu-heading" style={{ padding: "5rem 2rem", background: "#faf8f5", textAlign: "center" }}>
        <p style={{ color: "#d4a853", letterSpacing: "3px", fontSize: "0.8rem", marginBottom: "0.5rem" }}>NUESTROS PLATOS</p>
        <h2 id="menu-heading" style={{ fontSize: "2rem", marginBottom: "3rem" }}>Destacados del menú</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          {[
            { name: "Pasta Carbonara", price: "$2.800", desc: "Pasta al huevo, panceta, queso pecorino y yema." },
            { name: "Risotto ai Funghi", price: "$3.200", desc: "Arroz cremoso con hongos porcini y parmesano." },
            { name: "Tiramisú", price: "$1.400", desc: "El clásico postre italiano con mascarpone y café." },
          ].map(({ name, price, desc }) => (
            <article key={name} style={{
              background: "#fff",
              border: "1px solid #e8e0d5",
              borderRadius: "8px",
              padding: "2rem",
              maxWidth: "260px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
            }}>
              <h3 style={{ fontSize: "1.15rem", marginBottom: "0.4rem" }}>{name}</h3>
              <p style={{ color: "#d4a853", fontWeight: "bold", marginBottom: "0.8rem" }}>{price}</p>
              <p style={{ color: "#777", fontSize: "0.9rem", lineHeight: 1.6 }}>{desc}</p>
            </article>
          ))}
        </div>
        <Link href="#menu" style={{
          display: "inline-block",
          marginTop: "3rem",
          border: "2px solid #2c2c2c",
          color: "#2c2c2c",
          padding: "0.8rem 2.2rem",
          borderRadius: "4px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "0.95rem",
          letterSpacing: "1px",
        }}>
          Ver menú completo →
        </Link>
      </section>

      {/* CTA */}
      <section id="reservas" aria-labelledby="cta-heading" style={{
        background: "#1a1a1a",
        color: "#fff",
        textAlign: "center",
        padding: "5rem 2rem",
      }}>
        <h2 id="cta-heading" style={{ fontSize: "2rem", marginBottom: "1rem" }}>¿Listo para una noche especial?</h2>
        <p style={{ color: "#ccc", marginBottom: "2rem", fontSize: "1rem" }}>
          Reserva tu mesa hoy y disfruta de una experiencia gastronómica única.
        </p>
        {/* tel: es un enlace externo, se usa <a> nativo — Link es solo para rutas internas de Next.js */}
        <a href="tel:+541100000000" style={{
          display: "inline-block",
          border: "2px solid #d4a853",
          color: "#d4a853",
          padding: "0.8rem 2.2rem",
          borderRadius: "4px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "1rem",
          letterSpacing: "1px",
        }}>
          📞 Llamar ahora
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#111",
        color: "#666",
        textAlign: "center",
        padding: "2rem",
        fontSize: "0.85rem",
      }}>
        <p>© 2026 La Bella Tavola · Av. Corrientes 1234, Buenos Aires · Lun–Dom 12:00–23:00</p>
      </footer>
    </div>
  );
}
