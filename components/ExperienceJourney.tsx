const phases = [
  {
    id: "semaine1-2",
    title: "Semaine 1-2 · Kick-off & Diagnostic",
    description:
      "Sessions d'immersion territoriale, identification des défis, cadrage du projet et attribution du binôme mentor-mentoré.",
    touchpoints: ["Diagnostic 360°", "Atelier Vision & Impact", "Plan d'engagement personnalisé"]
  },
  {
    id: "semaine3-6",
    title: "Semaine 3-6 · Construction & Validation",
    description:
      "Rythme alterné entre mentorat individuel, masterclasses expertes et tests utilisateurs pour accélérer l'apprentissage.",
    touchpoints: ["Cliniques pitch & storytelling", "Sprint prototype", "Session capitalisation"]
  },
  {
    id: "semaine7-12",
    title: "Semaine 7-12 · Accélération & Rayonnement",
    description:
      "Accompagnement sur la mise en marché, la recherche de partenaires et la préparation au jury final et au financement.",
    touchpoints: ["Bootcamp storytelling d'impact", "Jury territorialisé", "Plan animation post-programme"]
  }
];

export function ExperienceJourney() {
  return (
    <section id="experience">
      <div className="container" style={{ display: "grid", gap: "32px" }}>
        <div style={{ display: "grid", gap: "16px", maxWidth: "600px" }}>
          <span className="tag">parcours mentoré</span>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "40px" }}>
            Une expérience hybride, engageante et mesurable.
          </h2>
          <p>
            Le programme s&apos;articule en trois séquences majeures. Chaque phase combine mentorat individuel,
            intelligence collective et outils numériques pour assurer un impact mesurable sur le territoire.
          </p>
        </div>
        <div style={{ display: "grid", gap: "20px" }}>
          {phases.map((phase, index) => (
            <article
              key={phase.id}
              className="surface"
              style={{
                padding: "32px",
                borderRadius: "var(--radius-lg)",
                display: "grid",
                gap: "16px",
                position: "relative"
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "24px",
                  right: "24px",
                  borderRadius: "50%",
                  width: "42px",
                  height: "42px",
                  background: "rgba(255, 255, 255, 0.08)",
                  display: "grid",
                  placeItems: "center",
                  fontWeight: 600,
                  color: "var(--color-text-muted)"
                }}
              >
                {index + 1}
              </span>
              <h3 style={{ fontSize: "22px" }}>{phase.title}</h3>
              <p>{phase.description}</p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px"
                }}
              >
                {phase.touchpoints.map((touchpoint) => (
                  <span
                    key={touchpoint}
                    style={{
                      padding: "10px 14px",
                      borderRadius: "var(--radius-sm)",
                      background: "rgba(15, 23, 42, 0.55)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      fontSize: "13px"
                    }}
                  >
                    {touchpoint}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
