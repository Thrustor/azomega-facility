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
    footer: "AZΩ Facility · Rīga · Telpu uzturēšana",
  },
} as const;

function Mark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="block leading-none">
      <span className={"font-mono tracking-tight " + (compact ? "text-sm" : "text-base")}>
        A Z <span className="text-amber">Ω</span>
      </span>
      <span className={"mt-1 block font-mono tracking-widest text-muted text-xs"}>FACILITY</span>
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
          <div className="flex items-center gap-3 sm:gap-6">
            <nav className="hidden items-center gap-5 sm:flex" aria-label="Primary">
              <a
                href="#about"
                className="inline-flex h-11 items-center font-mono text-xs tracking-widest text-muted hover:text-fg"
              >
                {t.navAbout}
              </a>
              <a
                href="#services"
                className="inline-flex h-11 items-center font-mono text-xs tracking-widest text-muted hover:text-fg"
              >
                {t.navServices}
              </a>
              <a
                href="#contact"
                className="inline-flex h-11 items-center font-mono text-xs tracking-widest text-muted hover:text-fg"
              >
                {t.navContact}
              </a>
            </nav>
            <div
              className="flex items-center font-mono text-xs tracking-widest"
              role="group"
              aria-label="Language"
            >
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
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-5xl px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28">
          <p className="font-mono text-xs tracking-widest text-amber">{t.place}</p>
          <h1 className="mt-6 font-mono text-hero">
            AZ<span className="text-amber">Ω</span> Facility
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-snug sm:text-2xl">{t.heroLine}</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{t.heroLede}</p>
        </section>

        <section
          id="about"
          className="scroll-mt-20 border-t border-line"
          aria-labelledby="about-heading"
        >
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="font-mono text-xs tracking-widest text-muted">{t.aboutLabel}</p>
            <h2 id="about-heading" className="mt-4 max-w-2xl font-mono text-2xl leading-snug sm:text-3xl">
              {t.aboutTitle}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{t.aboutBody}</p>
          </div>
        </section>

        <section
          id="services"
          className="scroll-mt-20 mx-auto max-w-5xl px-5 pb-8 sm:px-8"
          aria-labelledby="services-heading"
        >
          <p className="mb-2 font-mono text-xs tracking-widest text-muted">{t.servicesLabel}</p>
          <h2 id="services-heading" className="mb-10 font-mono text-2xl sm:text-3xl">
            {t.servicesIntro}
          </h2>
          <div className="border-b border-line">
            {t.services.map((service) => (
              <article
                key={service.n}
                className="border-t border-line py-8 sm:grid sm:grid-cols-12 sm:gap-6 sm:py-10"
              >
                <p className="font-mono text-sm text-amber tabular-nums sm:col-span-1">{service.n}</p>
                <h3 className="mt-3 font-mono text-xl leading-snug sm:col-span-4 sm:mt-0">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted sm:col-span-7 sm:mt-0">{service.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="approach"
          className="scroll-mt-20 border-t border-line"
          aria-labelledby="approach-heading"
        >
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="font-mono text-xs tracking-widest text-muted">{t.approachLabel}</p>
            <h2 id="approach-heading" className="mt-4 font-mono text-2xl sm:text-3xl">
              {t.approachTitle}
            </h2>
            <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
              {t.approachPoints.map((point) => (
                <div key={point.title}>
                  <h3 className="font-mono text-base leading-snug">{point.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{point.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-20 border-t border-line"
          aria-labelledby="contact-heading"
        >
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
            <p className="font-mono text-xs tracking-widest text-amber">{t.contactLabel}</p>
            <h2 id="contact-heading" className="mt-4 font-mono text-3xl sm:text-4xl">
              {t.contactTitle}
            </h2>
            <p className="mt-4 max-w-lg text-lg text-muted">{t.contactLede}</p>
            <ul className="mt-10 space-y-3 text-lg">
              <li>
                <a
                  className="underline decoration-line underline-offset-4 hover:decoration-amber"
                  href="mailto:hello@azomega.lv"
                >
                  hello@azomega.lv
                </a>
              </li>
              <li className="font-mono text-base text-muted">+371 ···· ····</li>
              <li className="pt-2 font-mono text-xs tracking-widest text-muted">{t.place}</li>
            </ul>
          </div>
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
