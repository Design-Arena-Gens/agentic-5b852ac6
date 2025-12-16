import { programPillars } from "@/lib/programData";

export function ProgramPillars() {
  return (
    <section id="programme">
      <div className="container" style={{ display: "grid", gap: "32px" }}>
        <div style={{ display: "grid", gap: "16px", maxWidth: "640px" }}>
          <span className="tag">architecture pédagogique</span>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "40px" }}>
            Un parcours structuré pour transformer les ambitions en projets tangibles.
          </h2>
          <p>
            Trois piliers complémentaires pour guider chaque porteur de projet depuis l&apos;étude de terrain
            jusqu&apos;à la mise sur le marché, avec un accompagnement mentoré sur-mesure.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gap: "24px",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))"
          }}
        >
          {programPillars.map((pillar) => (
            <article
              key={pillar.id}
              className="surface"
              style={{
                padding: "32px",
                borderRadius: "var(--radius-lg)",
                display: "grid",
                gap: "20px"
              }}
            >
              <div>
                <span style={{ fontSize: "14px", color: "var(--color-text-muted)" }}>Pilier</span>
                <h3 style={{ marginTop: "8px", fontSize: "24px" }}>{pillar.title}</h3>
              </div>
              <p>{pillar.description}</p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "grid",
                  gap: "12px"
                }}
              >
                {pillar.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    style={{
                      background: "rgba(15, 23, 42, 0.5)",
                      borderRadius: "var(--radius-sm)",
                      padding: "12px 16px",
                      border: "1px solid rgba(255, 255, 255, 0.08)"
                    }}
                  >
                    {outcome}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
