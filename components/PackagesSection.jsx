"use client";

import { useMemo, useState } from "react";

const packages = [
  {
    name: "Starter",
    price: "950 zł",
    timeline: "3 dni",
    description:
      "Szybka, charakterna strona wizytówka dla firm, które chcą błyskawicznie ruszyć z komunikacją.",
    features: [
      "1 strona landingowa oparta na strategii marki",
      "Integracja formularza kontaktowego",
      "Implementacja SSL i konfiguracja domeny",
      "Podstawowe SEO techniczne i analityka",
    ],
    cta: "Zamów Starter",
  },
  {
    name: "Biznes",
    price: "2 800 zł",
    timeline: "10–14 dni",
    description:
      "Rozbudowana witryna z kilkoma podstronami, zaprojektowana pod pozyskiwanie zapytań i rezerwacje.",
    features: [
      "3–5 podstron (oferta, realizacje, blog, FAQ)",
      "System rezerwacji spotkań online",
      "Optymalizacja profilu Google Business Profile",
      "Autorski panel do łatwej edycji treści",
    ],
    cta: "Wybierz Biznes",
    highlighted: true,
  },
  {
    name: "Sklep Mikro",
    price: "3 900 zł",
    timeline: "14–21 dni",
    description:
      "Gotowy do sprzedaży sklep internetowy dla małych marek produktowych i usług abonamentowych.",
    features: [
      "Do 20 produktów z kategoriami i stanami magazynowymi",
      "Płatności online (Przelewy24, Blik, karty)",
      "Integracja systemów wysyłki i etykiet",
      "Automatyczne maile transactional i koszyki",
    ],
    cta: "Uruchom e-commerce",
  },
];

const defaultActiveIndex = (() => {
  const highlightedIndex = packages.findIndex((pkg) => pkg.highlighted);
  return highlightedIndex === -1 ? 0 : highlightedIndex;
})();

export default function PackagesSection() {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const total = packages.length;

  const positions = useMemo(() => {
    const prevIndex = (activeIndex - 1 + total) % total;
    const nextIndex = (activeIndex + 1) % total;

    return packages.map((_, index) => {
      if (index === activeIndex) return "active";
      if (index === prevIndex) return "prev";
      if (index === nextIndex) return "next";
      return "hidden";
    });
  }, [activeIndex, total]);

  const shift = (direction) => {
    setActiveIndex((prev) => (prev + direction + total) % total);
  };

  return (
    <section id="pakiety">
      <div className="section-header">
        <span className="badge">Pakiety</span>
        <div>
          <h2>Trzy pakiety, jeden wspólny cel — szybki wzrost Twojej marki.</h2>
          <p>
            Każdy projekt zaczynamy od warsztatu, dlatego wszystkie pakiety
            mają solidne fundamenty strategiczne. Wybierz wariant dopasowany do
            etapu, na którym jest Twój biznes.
          </p>
        </div>
      </div>
      <div className="packages-carousel" aria-live="polite">
        <button
          className="carousel-arrow carousel-arrow--left"
          type="button"
          onClick={() => shift(-1)}
          aria-label="Poprzedni pakiet"
        >
          <span aria-hidden="true">&#8592;</span>
        </button>
        <div className="packages-stage">
          {packages.map((pack, index) => {
            const position = positions[index];
            const isActive = position === "active";

            return (
              <article
                key={pack.name}
                className={`card package-card package-card--${position}${pack.highlighted ? " package-card--featured" : ""}`}
                aria-hidden={!isActive}
              >
                <header>
                  <div className="package-heading">
                    <h3>{pack.name}</h3>
                    <span className="package-price">{pack.price}</span>
                  </div>
                  <p className="package-timeline">Realizacja: {pack.timeline}</p>
                </header>
                <p className="package-description">{pack.description}</p>
                <ul className="package-list">
                  {pack.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a className="button" href="#kontakt">
                  {pack.cta}
                </a>
              </article>
            );
          })}
        </div>
        <button
          className="carousel-arrow carousel-arrow--right"
          type="button"
          onClick={() => shift(1)}
          aria-label="Następny pakiet"
        >
          <span aria-hidden="true">&#8594;</span>
        </button>
      </div>
    </section>
  );
}
