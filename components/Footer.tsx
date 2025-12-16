export function Footer() {
  return (
    <footer style={{ padding: "48px 24px 72px" }}>
      <div
        className="container"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "24px", fontSize: "14px" }}
      >
        <div>
          <strong>Mentorat Local</strong>
          <p style={{ marginTop: "8px" }}>
            Programme éducatif porté par le collectif ImpactLab et les entreprises partenaires de la métropole.
          </p>
        </div>
        <div style={{ display: "grid", gap: "6px", color: "var(--color-text-muted)" }}>
          <span>Contact : mentorat@impactlab.co</span>
          <span>Charte mentors · Mentions légales · Politique de confidentialité</span>
          <span>© {new Date().getFullYear()} ImpactLab</span>
        </div>
      </div>
    </footer>
  );
}
