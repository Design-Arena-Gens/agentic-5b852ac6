"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

type CompanyFormState = {
  companyName: string;
  contactName: string;
  role: string;
  email: string;
  employees: string;
  commitment: string;
  notes: string;
};

const companyInitialState: CompanyFormState = {
  companyName: "",
  contactName: "",
  role: "",
  email: "",
  employees: "",
  commitment: "",
  notes: ""
};

const engagementOptions = [
  {
    id: "mentorat",
    label: "Mobiliser des collaborateurs mentors",
    description: "Former vos talents au mentorat et les intégrer au programme"
  },
  {
    id: "masterclass",
    label: "Animer une masterclass thématique",
    description: "Partager votre expertise métier auprès des cohortes"
  },
  {
    id: "financement",
    label: "Soutenir financièrement le programme",
    description: "Participer au financement des bourses d'incubation"
  }
];

export default function CompaniesPage() {
  const [form, setForm] = useState<CompanyFormState>(companyInitialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navigation />
      <main>
        <section style={{ paddingTop: "48px" }}>
          <div className="container" style={{ maxWidth: "760px" }}>
            <Link href="/" style={{ color: "var(--color-text-muted)", fontSize: "14px" }}>
              ← Retour à l&apos;accueil
            </Link>
            <div
              className="surface"
              style={{
                marginTop: "24px",
                padding: "48px",
                borderRadius: "var(--radius-xl)",
                display: "grid",
                gap: "24px"
              }}
            >
              <div style={{ display: "grid", gap: "12px" }}>
                <span className="tag">entreprises partenaires</span>
                <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "40px" }}>
                  Engagez vos équipes pour révéler les talents du territoire.
                </h1>
                <p>
                  Nous concevons un dispositif de mentorat clé en main pour vos collaborateurs et vos partenaires locaux.
                  Remplissez ce formulaire pour initier la collaboration.
                </p>
              </div>

              {submitted ? (
                <div
                  style={{
                    padding: "32px",
                    borderRadius: "var(--radius-lg)",
                    background: "rgba(15, 23, 42, 0.6)",
                    border: "1px solid rgba(255, 255, 255, 0.18)",
                    display: "grid",
                    gap: "12px",
                    textAlign: "center"
                  }}
                >
                  <h2 style={{ fontSize: "24px" }}>Merci pour votre engagement !</h2>
                  <p>
                    Notre équipe partenariats vous recontactera dans les 48h avec une proposition de parcours mentorat
                    adaptée à vos enjeux RH et votre territoire.
                  </p>
                  <button
                    type="button"
                    className="button-secondary"
                    onClick={() => {
                      setForm(companyInitialState);
                      setSubmitted(false);
                    }}
                    style={{ justifySelf: "center" }}
                  >
                    Envoyer une nouvelle demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "grid", gap: "20px" }}>
                  <div style={{ display: "grid", gap: "18px" }}>
                    <label style={{ display: "grid", gap: "6px" }}>
                      <span>Nom de l&apos;entreprise</span>
                      <input
                        required
                        name="companyName"
                        value={form.companyName}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="Ex : TechNova"
                      />
                    </label>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
                    <label style={{ display: "grid", gap: "6px" }}>
                      <span>Nom & prénom du contact</span>
                      <input
                        required
                        name="contactName"
                        value={form.contactName}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="Amina Diallo"
                      />
                    </label>
                    <label style={{ display: "grid", gap: "6px" }}>
                      <span>Fonction</span>
                      <input
                        required
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="Responsable engagement"
                      />
                    </label>
                  </div>

                  <label style={{ display: "grid", gap: "6px" }}>
                    <span>Email professionnel</span>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      style={inputStyle}
                      placeholder="amina.diallo@technova.com"
                    />
                  </label>

                  <label style={{ display: "grid", gap: "6px" }}>
                    <span>Taille de l&apos;entreprise</span>
                    <select name="employees" value={form.employees} onChange={handleChange} required style={inputStyle}>
                      <option value="">Sélectionnez</option>
                      <option value="moins50">Moins de 50</option>
                      <option value="50-200">50 à 200</option>
                      <option value="200-1000">200 à 1 000</option>
                      <option value="plus1000">Plus de 1 000</option>
                    </select>
                  </label>

                    <fieldset
                      style={{
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        borderRadius: "var(--radius-lg)",
                        padding: "24px",
                        display: "grid",
                        gap: "16px"
                      }}
                    >
                      <legend style={{ fontSize: "16px", padding: "0 8px" }}>
                        Types d&apos;engagement souhaités
                      </legend>
                      <div style={{ display: "grid", gap: "14px" }}>
                        {engagementOptions.map((option) => (
                          <label
                            key={option.id}
                            style={{
                              display: "grid",
                              gridTemplateColumns: "auto 1fr",
                              gap: "12px",
                              alignItems: "flex-start",
                              padding: "12px 16px",
                              borderRadius: "var(--radius-md)",
                              background: "rgba(15, 23, 42, 0.6)",
                              border: "1px solid rgba(255, 255, 255, 0.08)"
                            }}
                          >
                            <input
                              type="radio"
                              name="commitment"
                              value={option.id}
                              checked={form.commitment === option.id}
                              onChange={handleChange}
                              style={{ marginTop: "4px" }}
                              required
                            />
                            <span>
                              <strong style={{ display: "block", marginBottom: "4px" }}>{option.label}</strong>
                              <span style={{ color: "var(--color-text-muted)", fontSize: "14px" }}>
                                {option.description}
                              </span>
                            </span>
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    <label style={{ display: "grid", gap: "6px" }}>
                      <span>Particularités ou besoins complémentaires</span>
                      <textarea
                        name="notes"
                        value={form.notes}
                        onChange={handleChange}
                        style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }}
                        placeholder="Ex : intégrer un dispositif d'onboarding, articulation avec votre politique RSE..."
                      />
                    </label>
                  </div>
                  <button type="submit" className="button-primary" style={{ justifySelf: "flex-start" }}>
                    Valider ma demande
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "14px 16px",
  borderRadius: "var(--radius-md)",
  border: "1px solid rgba(255, 255, 255, 0.14)",
  background: "rgba(15, 23, 42, 0.6)",
  color: "var(--color-text)",
  fontSize: "15px"
};
