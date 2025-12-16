import { faqs } from "@/lib/programData";

export function FAQSection() {
  return (
    <section id="faq">
      <div className="container" style={{ display: "grid", gap: "32px" }}>
        <div style={{ display: "grid", gap: "12px", maxWidth: "600px" }}>
          <span className="tag">questions fréquentes</span>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "38px" }}>Tout savoir sur le programme.</h2>
        </div>
        <div style={{ display: "grid", gap: "16px" }}>
          {faqs.map((faq) => (
            <article
              key={faq.id}
              className="surface"
              style={{
                padding: "24px 28px",
                borderRadius: "var(--radius-md)",
                display: "grid",
                gap: "12px"
              }}
            >
              <h3 style={{ fontSize: "20px" }}>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
