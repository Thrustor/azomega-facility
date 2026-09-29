import { useEffect, useState } from "react";

type Lang = "en" | "lv";

const STORAGE_KEY = "azomega-lang";

const copy = {
  en: {
    servicesLabel: "Services",
    contactNav: "Contact",
    line: "Facility maintenance for your sites.",
    lede: "We handle the small things so you don’t have to.",
    services: [
      {
        n: "01",
        title: "Eco cleaning",
        body: "Weekly or scheduled. Pet-safe, human-safe products. Floors, surfaces, windows, restrooms. No harsh chemicals, no leftover smell.",
      },
      {
        n: "02",
        title: "Facility maintenance",
        body: "Light bulbs, HVAC and cooler filters, coffee machines, blinds, minor upkeep. One visit, one checklist, one invoice.",
      },
      {
        n: "03",
        title: "Air quality",
        body: "Coordination with a ventilation partner for MERV 13 media cabinets, bypass HEPA loops, and recuperator filter upgrades. We arrange it; they do the engineering.",
      },
      {
        n: "04",
        title: "Water",
        body: "Glass-bottle delivery, stacked and swapped on a schedule. Filter changes on systems that are not locked to another supplier. We do not touch existing Venden-style contracts.",
      },
      {
        n: "05",
        title: "Plant care",
        body: "Leaf dusting, pots, living walls.",
      },
      {
        n: "06",
        title: "Documentation",
        body: "Cleaning schedules and filter-change logs for audits and internal peace of mind.",
      },
      {
        n: "07",
        title: "After-hours",
        body: "Callout for spills, failed HVAC, urgent building issues.",
      },
    ],
    place: "Riga",
    footer: "AZΩ Facility · Riga · Facility maintenance",
  },
  lv: {
    servicesLabel: "Pakalpojumi",
    contactNav: "Kontakti",
    line: "Telpu uzturēšana jūsu objektos.",
    lede: "Mēs nokārtojam sīkumus, lai jums tas nebūtu jādara.",
    services: [
      {
        n: "01",
        title: "Ekoloģiska uzkopšana",
        body: "Reizi nedēļā vai pēc grafika. Līdzekļi, kas ir droši cilvēkiem un dzīvniekiem. Grīdas, virsmas, logi, tualetes. Bez kodīgiem līdzekļiem un bez paliekošas smakas.",
      },
      {
        n: "02",
        title: "Telpu uzturēšana",
        body: "Spuldzes, ventilācijas un dzesētāju filtri, kafijas automāti, žalūzijas, sīki uzturēšanas darbi. Viena vizīte, viens saraksts, viens rēķins.",
      },
      {
        n: "03",
        title: "Gaisa kvalitāte",
        body: "Saskaņošana ar ventilācijas partneri: MERV 13 filtru kasetes, HEPA apvadcilpas un rekuperatora filtru maiņa. Mēs noorganizējam. Inženieriju veic partneris.",
      },
      {
        n: "04",
        title: "Ūdens",
        body: "Stikla pudeļu piegāde pēc grafika — sakraujam un apmainām. Filtrus mainām sistēmām, kas nav piesaistītas citam piegādātājam. Esošos Venden tipa līgumus neaiztiekam.",
      },
      {
        n: "05",
        title: "Augu kopšana",
        body: "Lapu noslaucīšana, podi, dzīvās sienas.",
      },
      {
        n: "06",
        title: "Dokumentācija",
        body: "Uzkopšanas grafiki un filtru maiņas žurnāli auditiem un iekšējai kārtībai.",
      },
      {
        n: "07",
        title: "Ārpus darba laika",
        body: "Izsaukums noplūdēm, ventilācijas atteicei un steidzamiem jautājumiem ēkā.",
      },
    ],
    place: "Rīga",
    footer: "AZΩ Facility · Rīga · Telpu uzturēšana",
  },
} as const;

function Mark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "block leading-none" : "block leading-none"}>
      <span className={"font-mono tracking-tight " + (compact ? "text-sm" : "text-base")}>
        A Z <span className="text-amber">Ω</span>
      </span>
      <span
        className={
          "mt-1 block font-mono tracking-widest text-muted " + (compact ? "text-xs" : "text-xs")
        }
      >
        FACILITY
      </span>
    </span>
  );
}

export function SitePage() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "lv" || stored === "en") setLang(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function choose(next: Lang) {
    setLang(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  const t = copy[lang];

  return (
    <div id="top" className="min-h-screen bg-base text-fg">
      <header className="sticky top-0 z-40 border-b border-line bg-base/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="py-2" aria-label="AZΩ Facility">
            <Mark compact />
          </a>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center font-mono text-xs tracking-widest" role="group" aria-label="Language">
              <button
                type="button"
                aria-pressed={lang === "en"}
                onClick={() => choose("en")}
                className={"inline-flex h-11 items-center px-2 " + (lang === "en" ? "text-fg" : "text-muted")}
              >
                EN
              </button>
              <span className="text-line" aria-hidden="true">
                /
              </span>
              <button
                type="button"
                aria-pressed={lang === "lv"}
                onClick={() => choose("lv")}
                className={"inline-flex h-11 items-center px-2 " + (lang === "lv" ? "text-fg" : "text-muted")}
              >
                LV
              </button>
            </div>
            <a href="#contact" className="hidden h-11 items-center font-mono text-xs tracking-widest text-muted hover:text-fg sm:inline-flex">
              {t.contactNav}
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-5xl px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28">
          <p className="font-mono text-xs tracking-widest text-amber">{t.place}</p>
          <h1 className="mt-6 font-mono text-hero">
            AZ<span className="text-amber">Ω</span> Facility
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-snug sm:text-2xl">{t.line}</p>
          <p className="mt-4 max-w-xl text-lg text-muted">{t.lede}</p>
        </section>

        <section id="services" className="scroll-mt-20 mx-auto max-w-5xl px-5 pb-8 sm:px-8" aria-labelledby="services-heading">
          <h2 id="services-heading" className="sr-only">
            {t.servicesLabel}
          </h2>
          <p className="mb-2 font-mono text-xs tracking-widest text-muted">{t.servicesLabel}</p>
          <div className="border-b border-line">
            {t.services.map((service) => (
              <article key={service.n} className="border-t border-line py-8 sm:grid sm:grid-cols-12 sm:gap-6 sm:py-10">
                <p className="font-mono text-sm text-amber tabular-nums sm:col-span-1">{service.n}</p>
                <h3 className="mt-3 font-mono text-xl leading-snug sm:col-span-4 sm:mt-0">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-muted sm:col-span-7 sm:mt-0">{service.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="font-mono text-xs tracking-widest text-amber">{t.contactNav}</p>
          <h2 className="mt-4 font-mono text-4xl sm:text-5xl">{t.place}</h2>
          <ul className="mt-8 space-y-3 text-lg">
            <li>
              <a className="underline decoration-line underline-offset-4 hover:decoration-amber" href="mailto:hello@azomega.lv">
                hello@azomega.lv
              </a>
            </li>
            <li className="font-mono text-base text-muted">+371 ···· ····</li>
          </ul>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-8 sm:flex-row sm:items-end sm:justify-between sm:px-8">
          <Mark />
          <p className="font-mono text-xs tracking-wide text-muted">{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}
