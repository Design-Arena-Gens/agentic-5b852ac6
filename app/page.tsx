"use client";

import { useMemo, useState } from "react";
import { CallToAction } from "@/components/CallToAction";
import { ExperienceJourney } from "@/components/ExperienceJourney";
import { FAQSection } from "@/components/FAQSection";
import { Hero } from "@/components/Hero";
import { MentorShowcase } from "@/components/MentorShowcase";
import { Navigation } from "@/components/Navigation";
import { ProgramPillars } from "@/components/ProgramPillars";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const filterChips = [
  { id: "impact", label: "Impact social" },
  { id: "numerique", label: "Innovation numérique" },
  { id: "culture", label: "Culture & créativité" },
  { id: "green", label: "Transition écologique" }
];

const masterclasses = [
  {
    id: "business-model",
    topic: "Business model territoire",
    mentor: "Amina Diallo",
    slotsLeft: 6,
    focus: "impact"
  },
  {
    id: "digital-storytelling",
    topic: "Storytelling digital & pitch deck",
    mentor: "Mathis Ribeiro",
    slotsLeft: 4,
    focus: "numerique"
  },
  {
    id: "creative-finance",
    topic: "Financement des projets culturels",
    mentor: "Sofia Laroche",
    slotsLeft: 3,
    focus: "culture"
  },
  {
    id: "circular-labs",
    topic: "Laboratoire économie circulaire",
    mentor: "Léa Baranes",
    slotsLeft: 5,
    focus: "green"
  }
];

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredMasterclasses = useMemo(() => {
    if (!activeFilter) {
      return masterclasses;
    }

    return masterclasses.filter((session) => session.focus === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProgramPillars />

        <section>
          <div className="container" style={{ display: "grid", gap: "24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
              <div style={{ display: "grid", gap: "12px" }}>
                <span className="tag">masterclasses à venir</span>
                <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "36px" }}>
                  Des sessions virtuelles ciblées pour accélérer.
                </h2>
              </div>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {filterChips.map((chip) => {
                  const isActive = activeFilter === chip.id;
                  return (
                    <button
                      key={chip.id}
                      type="button"
                      onClick={() => setActiveFilter(isActive ? null : chip.id)}
                      style={{
                        padding: "10px 16px",
                        borderRadius: "var(--radius-sm)",
                        border: isActive ? "1px solid var(--color-accent)" : "1px solid rgba(255,255,255,0.1)",
                        background: isActive ? "rgba(251, 133, 0, 0.2)" : "rgba(15, 23, 42, 0.6)",
                        color: "var(--color-text)",
                        fontSize: "14px",
                        cursor: "pointer",
                        transition: "var(--transition)"
                      }}
                    >
                      {chip.label}
                    </button>
                  );
                })}
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "20px"
              }}
            >
              {filteredMasterclasses.map((session) => (
                <article
                  key={session.id}
                  className="surface"
                  style={{
                    padding: "24px",
                    borderRadius: "var(--radius-lg)",
                    display: "grid",
                    gap: "12px"
                  }}
                >
                  <div style={{ display: "grid", gap: "6px" }}>
                    <span style={{ fontSize: "12px", color: "var(--color-text-muted)", textTransform: "uppercase" }}>
                      {session.focus}
                    </span>
                    <h3 style={{ fontSize: "20px" }}>{session.topic}</h3>
                  </div>
                  <p style={{ color: "var(--color-text-muted)" }}>Animée par {session.mentor}</p>
                  <div
                    style={{
                      padding: "10px 14px",
                      borderRadius: "var(--radius-sm)",
                      background: "rgba(15, 23, 42, 0.6)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      fontSize: "13px",
                      display: "flex",
                      justifyContent: "space-between"
                    }}
                  >
                    <span>Places restantes</span>
                    <strong>{session.slotsLeft}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <MentorShowcase />
        <ExperienceJourney />
        <Testimonials />
        <FAQSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
