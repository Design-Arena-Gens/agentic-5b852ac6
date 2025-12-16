import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" style={{ paddingTop: "56px" }}>
      <div className="container" style={{ display: "grid", gap: "36px", alignItems: "center" }}>
        <div
          className="surface"
          style={{
            padding: "56px",
            borderRadius: "var(--radius-xl)",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "0",
              background: "radial-gradient(circle at 20% -10%, rgba(255, 183, 3, 0.25), transparent 55%)"
            }}
          />
          <span className="tag" style={{ position: "relative" }}>
            prog· mentorer les talents locaux
          </span>
          <h1
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "56px",
              lineHeight: 1.05,
              marginTop: "24px",
              position: "relative"
            }}
          >
            Développons la nouvelle génération de bâtisseurs urbains.
          </h1>
          <p style={{ marginTop: "20px", fontSize: "18px", maxWidth: "580px", position: "relative" }}>
            Un programme de mentorat en ligne qui connecte les collaborateurs d&apos;entreprises engagées
            aux jeunes entrepreneurs locaux. Ensemble, construisons des solutions qui transforment nos
            quartiers.
          </p>
          <div style={{ display: "flex", gap: "16px", marginTop: "36px", position: "relative" }}>
            <Link href="/candidater" className="button-primary">
              Rejoindre la cohorte
            </Link>
            <Link href="#programme" className="button-secondary">
              Découvrir le parcours
            </Link>
          </div>
          <div
            style={{
              marginTop: "48px",
              display: "flex",
              flexWrap: "wrap",
              gap: "24px",
              position: "relative"
            }}
          >
            <div>
              <h3 style={{ fontSize: "42px", marginBottom: "8px" }}>45</h3>
              <p>mentors issus de 18 entreprises partenaires</p>
            </div>
            <div>
              <h3 style={{ fontSize: "42px", marginBottom: "8px" }}>120h</h3>
              <p>de mentorat personnalisé par parcours</p>
            </div>
            <div>
              <h3 style={{ fontSize: "42px", marginBottom: "8px" }}>92%</h3>
              <p>des projets finalisent un prototype prêt à tester</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
