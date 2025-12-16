import Link from "next/link";

export function CallToAction() {
  return (
    <section>
      <div className="container">
        <div
          className="surface"
          style={{
            padding: "48px",
            borderRadius: "var(--radius-xl)",
            display: "grid",
            gap: "24px",
            textAlign: "center"
          }}
        >
          <span className="tag" style={{ justifySelf: "center" }}>
            prochaine cohorte · septembre 2024
          </span>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "38px" }}>
            Prêt·e à catalyser l&apos;impact de votre territoire ?
          </h2>
          <p style={{ maxWidth: "620px", justifySelf: "center" }}>
            Que vous soyez jeune entrepreneur ou collaborateur d&apos;entreprise, rejoignez une communauté
            qui favorise l&apos;innovation locale. Nous co-construisons chaque parcours en fonction de vos
            objectifs et de vos contraintes.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/candidater" className="button-primary">
              Déposer sa candidature
            </Link>
            <Link href="/entreprises" className="button-secondary">
              Engager mon entreprise
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
