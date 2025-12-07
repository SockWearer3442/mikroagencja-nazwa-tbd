const highlights = [
  "Strategia dopasowana do Twojej marki",
  "Projekt oparty na designie, a nie szablonie",
  "Realizacja bez zaskoczeń w 3 kroki"
];

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="badge">Mikro agencja kreatywna</span>
        <h1>
          Studio Falstart: charakterna strona internetowa, która wyrywa się
          do przodu.
        </h1>
        <p>
          Pomagamy mikro firmom rosnąć dzięki nowoczesnym stronom www, które
          wyglądają świetnie i wspierają cele biznesowe. Pracujemy szybko,
          transparentnie i zawsze z myślą o efekcie dla Twoich klientów.
        </p>
        <div className="hero-cta">
          <a className="button" href="#kontakt">
            Umów konsultację
          </a>
          <a className="button button--ghost" href="#pakiety">
            Zobacz pakiety
          </a>
        </div>
        <ul className="hero-highlights">
          {highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="hero-visual">
        <div className="hero-sphere" />
        <div className="hero-card hero-card--top">
          <h3>Starter</h3>
          <p>1 strona wizytówka, gotowa w 3 dni.</p>
        </div>
        <div className="hero-card hero-card--mid">
          <h3>Biznes</h3>
          <p>3–5 podstron, rezerwacje i GMB.</p>
        </div>
        <div className="hero-card hero-card--bottom">
          <h3>Sklep Mikro</h3>
          <p>Sklep do 20 produktów z płatnościami.</p>
        </div>
      </div>
    </section>
  );
}
