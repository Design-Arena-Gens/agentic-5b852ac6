import { mentors } from "@/lib/programData";

export function MentorShowcase() {
  return (
    <section id="mentors">
      <div className="container" style={{ display: "grid", gap: "32px" }}>
        <div style={{ display: "grid", gap: "16px", maxWidth: "620px" }}>
          <span className="tag">mentors engagés</span>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "40px" }}>
            Des collaborateurs expérimentés, formés pour révéler le potentiel des jeunes talents.
          </h2>
          <p>
            Chaque mentor apporte son expertise sectorielle et son réseau. Notre équipe pédagogique
            assure l&apos;alignement entre besoins des jeunes entrepreneurs et compétences des mentors.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px"
          }}
        >
          {mentors.map((mentor) => (
            <article
              key={mentor.id}
              className="surface"
              style={{
                padding: "28px",
                borderRadius: "var(--radius-lg)",
                display: "grid",
                gap: "16px"
              }}
            >
              <div>
                <h3 style={{ fontSize: "22px" }}>{mentor.name}</h3>
                <p style={{ color: "var(--color-text-muted)", marginTop: "4px" }}>
                  {mentor.role} · {mentor.company}
                </p>
              </div>
              <p>{mentor.bio}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {mentor.expertise.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      padding: "8px 12px",
                      fontSize: "13px",
                      color: "var(--color-text-muted)"
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div
                style={{
                  marginTop: "8px",
                  padding: "12px 16px",
                  background: "rgba(15, 23, 42, 0.5)",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  fontSize: "14px"
                }}
              >
                📅 {mentor.availability}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
