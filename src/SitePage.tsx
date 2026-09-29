import { useEffect, useState } from "react";

type Lang = "en" | "lv";

const STORAGE_KEY = "azomega-lang";

const copy = {
  en: {
    navServices: "Services",
    navAbout: "About",
    navContact: "Contact",
    place: "Riga",
    heroLine: "Your sites stay ready. That is the job.",
    heroLede:
      "Cleaning, upkeep, air, water, plants, and the paperwork that proves it. One team in Riga. Clear schedules. No theatre.",
    heroCta: "Tell us about your site",
    heroSecondary: "See how we work",
    aboutLabel: "About",
    aboutTitle: "Reliable for the people who decide. Dignified for the people who do the work.",
    aboutBody:
      "Facility sites often sound the same — corporate, safe, interchangeable. We keep the calm you need when you hand over a building. We also treat the craft with respect: real checklists, direct contact, and a team that would rather fix something than explain why it waited.",
    servicesLabel: "Services",
    servicesIntro: "What we take off your plate.",
    services: [
      {
        n: "01",
        title: "Eco cleaning",
        body: "Weekly or on a schedule. Products safe for people and pets. Floors, surfaces, windows, restrooms. No harsh residue. No leftover smell.",
      },
      {
        n: "02",
        title: "Facility maintenance",
        body: "Bulbs, HVAC and cooler filters, coffee machines, blinds, minor fixes. One visit. One checklist. One invoice.",
      },
      {
        n: "03",
        title: "Air quality",
        body: "We coordinate ventilation upgrades with a specialist partner — MERV 13 media, bypass HEPA loops, recuperator filters. We arrange it. They engineer it.",
      },
      {
        n: "04",
        title: "Water",
        body: "Glass-bottle delivery on a schedule — stacked and swapped. Filter changes where systems are not locked to another supplier. Existing Venden-style contracts stay untouched.",
      },
      {
        n: "05",
        title: "Plant care",
        body: "Leaf dusting, pot care, living walls. Green that still looks looked-after.",
      },
      {
        n: "06",
        title: "Documentation",
        body: "Cleaning schedules and filter-change logs. Ready for an audit. Useful on an ordinary Tuesday.",
      },
      {
        n: "07",
        title: "After-hours",
        body: "Callout for spills, failed HVAC, and urgent building issues — when the clock does not care.",
      },
    ],
    approachLabel: "How we work",
    approachTitle: "Quiet competence.",
    approachPoints: [
      {
        title: "Schedules you can trust",
        body: "Visits land when they should. You are not chasing updates.",
      },
      {
        title: "Paper that holds up",
        body: "Logs and schedules that survive an audit — and a Monday morning.",
      },
      {
        title: "One accountable team",
        body: "Same faces, same standards. Problems get fixed, not handed around.",
      },
    ],
    contactLabel: "Contact",
    contactTitle: "Tell us about your site.",
    contactLede: "Send a note. We reply with a clear next step — not a deck.",
    contactPanelTitle: "Send a note",
    contactPanelBody: "A short description of the building and what you need is enough to start.",
    contactPanelCta: "Email hello@azomega.lv",
    contactPhoneNote: "Phone on request",
    footer: "AZΩ Facility · Riga · Facility maintenance",
  },
  lv: {
    navServices: "Pakalpojumi",
    navAbout: "Par mums",
    navContact: "Kontakti",
    place: "Rīga",
    heroLine: "Jūsu objekti paliek gatavi. Tas ir darbs.",
    heroLede:
      "Uzkopšana, uzturēšana, gaiss, ūdens, augi un dokumentācija. Viena komanda Rīgā. Skaidri grafiki. Bez teātra.",
    heroCta: "Pastāstiet par savu objektu",
    heroSecondary: "Kā mēs strādājam",
    aboutLabel: "Par mums",
    aboutTitle: "Uzticami tiem, kas lemj. Cieņpilni tiem, kas dara darbu.",
    aboutBody:
      "Lielākā daļa FM lapu skan vienādi. Mēs saglabājam mieru, kas vajadzīgs, kad nododat ēku. Un cienām amatu: īsti saraksti, tiešs kontakts, komanda, kas labāk salabo, nekā skaidro, kāpēc gaidīja.",
    servicesLabel: "Pakalpojumi",
    servicesIntro: "Ko mēs noņemam no jūsu kārtības.",
    services: [
      {
        n: "01",
        title: "Ekoloģiska uzkopšana",
        body: "Reizi nedēļā vai pēc grafika. Līdzekļi, kas droši cilvēkiem un dzīvniekiem. Grīdas, virsmas, logi, tualetes. Bez kodīgām paliekām. Bez smakas.",
      },
      {
        n: "02",
        title: "Telpu uzturēšana",
        body: "Spuldzes, ventilācijas un dzesētāju filtri, kafijas automāti, žalūzijas, sīki labojumi. Viena vizīte. Viens saraksts. Viens rēķins.",
      },
      {
        n: "03",
        title: "Gaisa kvalitāte",
        body: "Saskaņojam ventilācijas uzlabojumus ar speciālistu partneri — MERV 13, HEPA apvadcilpas, rekuperatora filtri. Mēs noorganizējam. Viņi inženierē.",
      },
      {
        n: "04",
        title: "Ūdens",
        body: "Stikla pudeļu piegāde pēc grafika — sakraujam un apmainām. Filtrus mainām, kur sistēma nav piesaistīta citam piegādātājam. Esošos Venden tipa līgumus neaiztiekam.",
      },
      {
        n: "05",
        title: "Augu kopšana",
        body: "Lapu noslaucīšana, podi, dzīvās sienas. Zaļums, kas joprojām izskatās kopts.",
      },
      {
        n: "06",
        title: "Dokumentācija",
        body: "Uzkopšanas grafiki un filtru maiņas žurnāli. Gatavi auditam. Noderīgi arī parastā otrdienā.",
      },
      {
        n: "07",
        title: "Ārpus darba laika",
        body: "Izsaukums noplūdēm, ventilācijas atteicei un steidzamiem ēkas jautājumiem — kad pulkstenis nerēķinās.",
      },
    ],
    approachLabel: "Kā mēs strādājam",
    approachTitle: "Klusa kompetence.",
    approachPoints: [
      {
        title: "Grafiki, kam var uzticēties",
        body: "Vizītes notiek, kad jābūt. Jums nav jādzinas pakaļ atjauninājumiem.",
      },
      {
        title: "Papīri, kas turas",
        body: "Žurnāli un grafiki, kas iztur auditu — un pirmdienas rītu.",
      },
      {
        title: "Viena atbildīga komanda",
        body: "Tās pašas sejas, tie paši standarti. Problēmas labo, nevis padod tālāk.",
      },
    ],
    contactLabel: "Kontakti",
    contactTitle: "Pastāstiet par savu objektu.",
    contactLede: "Uzrakstiet. Atbildēsim ar skaidru nākamo soli — ne ar prezentāciju.",
    contactPanelTitle: "Uzrakstiet mums",
    contactPanelBody: "Īss ēkas un vajadzību apraksts ir pietiekams, lai sāktu.",
    contactPanelCta: "Rakstīt hello@azomega.lv",
    contactPhoneNote: "Tālrunis pēc pieprasījuma",
    footer: "AZΩ Facility · Rīga · Telpu uzturēšana",
  },
} as const;

function Mark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="block leading-none">
      <span
        className={
          "font-mono tracking-tight text-fg " + (compact ? "text-sm" : "text-base")
        }
      >
        A Z <span className="text-copper">Ω</span>
      </span>
      <span
        className={
          "mt-1.5 block font-mono tracking-[0.22em] text-muted " +
          (compact ? "text-[10px]" : "text-xs")
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
      <header className="sticky top-0 z-40 border-b border-line/80 bg-base/90 backdrop-blur-md">
        <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#top" className="py-2" aria-label="AZΩ Facility">
            <Mark compact />
          </a>
          <div className="flex items-center gap-2 sm:gap-5">
            <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
              <a
                href="#about"
                className="inline-flex h-11 items-center rounded-md px-3 text-sm text-muted transition-colors hover:bg-base-soft hover:text-fg"
              >
                {t.navAbout}
              </a>
              <a
                href="#services"
                className="inline-flex h-11 items-center rounded-md px-3 text-sm text-muted transition-colors hover:bg-base-soft hover:text-fg"
              >
                {t.navServices}
              </a>
              <a
                href="#contact"
                className="inline-flex h-11 items-center rounded-md px-3 text-sm text-muted transition-colors hover:bg-base-soft hover:text-fg"
              >
                {t.navContact}
              </a>
            </nav>
            <div
              className="flex items-center rounded-full border border-line bg-base-soft/60 px-1 font-mono text-[11px] tracking-widest"
              role="group"
              aria-label="Language"
            >
              <button
                type="button"
                aria-pressed={lang === "en"}
                onClick={() => choose("en")}
                className={
                  "inline-flex h-9 items-center rounded-full px-2.5 transition-colors " +
                  (lang === "en" ? "bg-pine text-base" : "text-muted hover:text-fg")
                }
              >
                EN
              </button>
              <button
                type="button"
                aria-pressed={lang === "lv"}
                onClick={() => choose("lv")}
                className={
                  "inline-flex h-9 items-center rounded-full px-2.5 transition-colors " +
                  (lang === "lv" ? "bg-pine text-base" : "text-muted hover:text-fg")
                }
              >
                LV
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-line">
          <div className="arch-grid absolute inset-0" aria-hidden="true" />
          <div className="grain absolute inset-0" aria-hidden="true" />
          <div
            className="pointer-events-none absolute -right-8 top-8 select-none font-mono text-[min(42vw,22rem)] leading-none text-pine/[0.07] sm:right-4 sm:top-0"
            aria-hidden="true"
          >
            Ω
          </div>
          <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-24 sm:px-8 sm:pt-28 sm:pb-32 lg:px-10">
            <p className="font-mono text-xs tracking-[0.2em] text-copper">{t.place}</p>
            <h1 className="mt-6 max-w-4xl font-sans text-hero font-medium text-fg">
              AZ<span className="text-copper">Ω</span> Facility
            </h1>
            <p className="mt-8 max-w-2xl text-2xl leading-snug tracking-tight text-fg sm:text-3xl">
              {t.heroLine}
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{t.heroLede}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="mailto:hello@azomega.lv"
                className="inline-flex h-12 items-center justify-center rounded-md bg-pine px-6 text-sm font-medium tracking-wide text-base transition-colors hover:bg-pine-deep focus-visible:outline-offset-4"
              >
                {t.heroCta}
              </a>
              <a
                href="#approach"
                className="inline-flex h-12 items-center text-sm font-medium text-muted underline decoration-line underline-offset-4 transition-colors hover:text-fg hover:decoration-pine"
              >
                {t.heroSecondary}
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-[5rem] border-b border-line bg-base-soft/40"
          aria-labelledby="about-heading"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-12 lg:gap-12 lg:px-10">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs tracking-[0.2em] text-copper">{t.aboutLabel}</p>
            </div>
            <div className="lg:col-span-8">
              <h2 id="about-heading" className="max-w-2xl text-display text-fg">
                {t.aboutTitle}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{t.aboutBody}</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="scroll-mt-[5rem]"
          aria-labelledby="services-heading"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
            <div className="mb-12 max-w-2xl">
              <p className="font-mono text-xs tracking-[0.2em] text-copper">{t.servicesLabel}</p>
              <h2 id="services-heading" className="mt-3 text-display text-fg">
                {t.servicesIntro}
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {t.services.map((service) => (
                <article
                  key={service.n}
                  className="group rounded-xl border border-line bg-base p-6 transition-colors hover:border-pine/35 hover:bg-pine-soft/40 sm:p-7"
                >
                  <p className="font-mono text-xs tabular-nums tracking-wider text-copper">
                    {service.n}
                  </p>
                  <h3 className="mt-4 text-xl font-medium leading-snug tracking-tight text-fg">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{service.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How we work — dark band */}
        <section
          id="approach"
          className="scroll-mt-[5rem] bg-ink text-base"
          aria-labelledby="approach-heading"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
            <p className="font-mono text-xs tracking-[0.2em] text-copper">{t.approachLabel}</p>
            <h2 id="approach-heading" className="mt-3 text-display text-base">
              {t.approachTitle}
            </h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-5">
              {t.approachPoints.map((point, i) => (
                <div
                  key={point.title}
                  className="rounded-xl border border-ink-line bg-ink/80 p-6 sm:p-7"
                >
                  <p className="font-mono text-xs tabular-nums tracking-wider text-copper">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-lg font-medium leading-snug text-base">
                    {point.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-muted">{point.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-[5rem] border-t border-line"
          aria-labelledby="contact-heading"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:items-stretch">
            <div className="flex flex-col justify-center">
              <p className="font-mono text-xs tracking-[0.2em] text-copper">{t.contactLabel}</p>
              <h2 id="contact-heading" className="mt-3 text-display text-fg">
                {t.contactTitle}
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">{t.contactLede}</p>
              <ul className="mt-10 space-y-4">
                <li>
                  <a
                    className="text-lg font-medium text-fg underline decoration-line underline-offset-4 transition-colors hover:decoration-pine"
                    href="mailto:hello@azomega.lv"
                  >
                    hello@azomega.lv
                  </a>
                </li>
                <li className="font-mono text-sm tracking-wide text-muted">
                  {t.contactPhoneNote}
                </li>
                <li className="font-mono text-xs tracking-[0.2em] text-muted">{t.place}</li>
              </ul>
            </div>
            <div className="flex flex-col justify-between rounded-2xl border border-line bg-base-soft/70 p-8 sm:p-10">
              <div>
                <h3 className="text-xl font-medium tracking-tight text-fg">
                  {t.contactPanelTitle}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{t.contactPanelBody}</p>
              </div>
              <a
                href="mailto:hello@azomega.lv?subject=Site%20inquiry"
                className="mt-10 inline-flex h-12 w-full items-center justify-center rounded-md bg-pine px-6 text-sm font-medium tracking-wide text-base transition-colors hover:bg-pine-deep sm:w-auto"
              >
                {t.contactPanelCta}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-base-soft/50">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8 lg:px-10">
          <Mark />
          <p className="font-mono text-xs tracking-wide text-muted">{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}
