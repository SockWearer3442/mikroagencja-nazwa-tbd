const steps = [
  {
    label: "01",
    title: "Warsztat i kierunek",
    description:
      "Zaczynamy od rozmowy i warsztatu online. Poznajemy Twoich klientów, mapujemy cele i ustalamy styl komunikacji.",
  },
  {
    label: "02",
    title: "Projekt i wdrożenie",
    description:
      "Projektujemy unikatowy layout, wdrażamy w Next.js i dbamy o skuteczną narrację na każdej sekcji.",
  },
  {
    label: "03",
    title: "Start i wzrost",
    description:
      "Konfigurujemy domenę, SSL, narzędzia analityczne oraz automatyczne maile. Następnie wspieramy przy pierwszych kampaniach.",
  },
];

export default function ProcessSection() {
  return (
    <section>
      <div className="section-header">
        <span className="badge">Proces</span>
        <div>
          <h2>Transparentny proces, który utrzymuje tempo i jakość.</h2>
          <p>
            Pracujemy sprintami, dzięki czemu już po pierwszym tygodniu możesz
            zobaczyć działający prototyp. Stały kontakt zapewnia pełną kontrolę
            nad każdym etapem.
          </p>
        </div>
      </div>
      <div className="grid process-grid">
        {steps.map((step) => (
          <article className="card process-card" key={step.label}>
            <span className="process-label">{step.label}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
