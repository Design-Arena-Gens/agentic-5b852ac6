import Link from "next/link";

const navLinks = [
  { href: "#programme", label: "Programme" },
  { href: "#mentors", label: "Mentors" },
  { href: "#experience", label: "Expérience" },
  { href: "#faq", label: "FAQ" }
];

export function Navigation() {
  return (
    <header style={{ padding: "24px 24px 0" }}>
      <div
        className="container"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}
      >
        <Link href="/" style={{ fontWeight: 700, fontSize: "20px", letterSpacing: "0.08em", flexShrink: 0 }}>
          Mentorat Local
        </Link>
        <nav style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{ color: "var(--color-text-muted)", fontSize: "14px" }}>
              {link.label}
            </Link>
          ))}
          <Link href="/candidater" className="button-secondary">
            Candidater
          </Link>
        </nav>
      </div>
    </header>
  );
}
