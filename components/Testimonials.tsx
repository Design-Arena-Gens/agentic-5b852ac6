import { testimonials } from "@/lib/programData";

export function Testimonials() {
  return (
    <section>
      <div className="container" style={{ display: "grid", gap: "32px" }}>
        <div style={{ display: "grid", gap: "12px" }}>
          <span className="tag">retours d&apos;expérience</span>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "38px" }}>
            Une communauté qui partage ses victoires et apprend ensemble.
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px"
          }}
        >
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="surface"
              style={{
                padding: "32px",
                borderRadius: "var(--radius-lg)",
                display: "grid",
                gap: "16px"
              }}
            >
              <blockquote style={{ fontSize: "18px", color: "var(--color-text)", lineHeight: 1.6 }}>
                “{testimonial.quote}”
              </blockquote>
              <figcaption style={{ fontSize: "14px", color: "var(--color-text-muted)" }}>
                {testimonial.name} · {testimonial.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
