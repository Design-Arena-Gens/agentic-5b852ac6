"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  projectName: string;
  focusArea: string;
  description: string;
  expectations: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  projectName: "",
  focusArea: "",
  description: "",
  expectations: ""
};

export default function ApplyPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
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
              <span className="tag">candidature jeunes entrepreneurs</span>
              <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "40px" }}>
                Candidatez pour rejoindre la cohorte « Territoires Innovants ».
              </h1>
              <p>
                Décrivez votre projet, vos attentes et vos disponibilités. Notre équipe qualification vous contactera
                sous 5 jours ouvrés pour finaliser votre dossier.
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
                <h2 style={{ fontSize: "24px" }}>Merci pour votre candidature !</h2>
                <p>
                  Nous analysons votre dossier et reviendrons vers vous très rapidement avec les prochaines étapes.
                  Vérifiez vos emails et préparez votre pitch de projet.
                </p>
                <button
                  type="button"
                  className="button-secondary"
                  onClick={() => {
                    setForm(initialState);
                    setSubmitted(false);
                  }}
                  style={{ justifySelf: "center" }}
                >
                  Soumettre une nouvelle candidature
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "grid", gap: "20px" }}>
                <div style={{ display: "grid", gap: "18px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px" }}>
                    <label style={{ display: "grid", gap: "6px" }}>
                      <span>Prénom</span>
                      <input
                        required
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="Sofia"
                      />
                    </label>
                    <label style={{ display: "grid", gap: "6px" }}>
                      <span>Nom</span>
                      <input
                        required
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="Diarra"
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
                      placeholder="sofia@projetlocal.fr"
                    />
                  </label>

                  <label style={{ display: "grid", gap: "6px" }}>
                    <span>Nom du projet</span>
                    <input
                      required
                      name="projectName"
                      value={form.projectName}
                      onChange={handleChange}
                      style={inputStyle}
                      placeholder="Ex : Studio Urbain"
                    />
                  </label>

                  <label style={{ display: "grid", gap: "6px" }}>
                    <span>Enjeu principal</span>
                    <select name="focusArea" value={form.focusArea} onChange={handleChange} required style={inputStyle}>
                      <option value="">Sélectionnez un enjeu</option>
                      <option value="impact_social">Impact social & inclusion</option>
                      <option value="transition_ecologique">Transition écologique</option>
                      <option value="innovation_numerique">Innovation numérique</option>
                      <option value="culture_creativite">Culture & créativité</option>
                    </select>
                  </label>

                  <label style={{ display: "grid", gap: "6px" }}>
                    <span>Décrivez votre projet</span>
                    <textarea
                      required
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      style={{ ...inputStyle, minHeight: "140px", resize: "vertical" }}
                      placeholder="Expliquez le problème que vous adressez, votre solution, votre stade de développement..."
                    />
                  </label>

                  <label style={{ display: "grid", gap: "6px" }}>
                    <span>Vos attentes vis-à-vis du mentorat</span>
                    <textarea
                      required
                      name="expectations"
                      value={form.expectations}
                      onChange={handleChange}
                      style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }}
                      placeholder="Quels sujets souhaitez-vous travailler avec un mentor ?"
                    />
                  </label>
                </div>
                <button type="submit" className="button-primary" style={{ justifySelf: "flex-start" }}>
                  Envoyer ma candidature
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
