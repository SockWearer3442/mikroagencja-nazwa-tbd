"use client";

import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { sendContact } from "../app/actions/sendContact";

const initialState = {
  ok: false,
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="button" type="submit" disabled={pending}>
      {pending ? "Wysyłanie..." : "Wyślij zapytanie"}
    </button>
  );
}

export default function ContactSection() {
  const [state, formAction] = useFormState(sendContact, initialState);

  useEffect(() => {
    if (state.ok) {
      const form = document.getElementById("contact-form");
      form?.reset();
    }
  }, [state.ok]);

  return (
    <section id="kontakt">
      <div className="section-header">
        <span className="badge">Kontakt</span>
        <div>
          <h2>Gotowy na wspólny projekt? Daj znać, a odezwiemy się w 24h.</h2>
          <p>
            Chcesz porozmawiać szybciej? Zadzwoń: <a href="tel:+48570000000">+48 570 000 000</a>
          </p>
        </div>
      </div>
      <div className="contact-grid">
        <div className="card contact-card">
          <h3>Bezpośredni kontakt</h3>
          <ul className="contact-list">
            <li>
              <span>E-mail</span>
              <a href="mailto:hej@studiofalstart.pl">hej@studiofalstart.pl</a>
            </li>
            <li>
              <span>Telefon</span>
              <a href="tel:+48570000000">+48 570 000 000</a>
            </li>
            <li>
              <span>Godziny</span>
              <p>Pn–Pt, 9:00–17:00</p>
            </li>
          </ul>
          <p className="contact-note">
            Wysyłając formularz, zgadzasz się na kontakt mailowy w sprawie oferty.
          </p>
        </div>
        <form id="contact-form" className="card contact-form" action={formAction}>
          <div className="form-grid">
            <label>
              Imię i nazwisko*
              <input name="name" type="text" placeholder="Jak mamy się do Ciebie zwracać?" required />
            </label>
            <label>
              E-mail*
              <input
                name="email"
                type="email"
                placeholder="Podaj e-mail, na który odpowiemy"
                required
              />
            </label>
            <label>
              Telefon
              <input name="phone" type="tel" placeholder="Opcjonalnie: numer telefonu" />
            </label>
            <label className="form-full">
              Opowiedz o projekcie*
              <textarea
                name="message"
                rows={5}
                placeholder="Czego potrzebujesz? Podziel się ważnymi szczegółami."
                required
              />
            </label>
          </div>
          <div className="form-footer">
            <SubmitButton />
            {state.message && (
              <p className={`form-message${state.ok ? " form-message--success" : " form-message--error"}`}>
                {state.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
