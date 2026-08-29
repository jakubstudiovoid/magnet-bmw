import { ArrowDown, ArrowUpRight, MapPin, Navigation, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { BookingForm } from "@/components/booking-form";
import { OpeningBadge } from "@/components/opening-badge";
import { Reveal } from "@/components/reveal";
import { ServicesExplorer } from "@/components/services-explorer";
import { Button } from "@/components/ui/button";
import {
  FAQ,
  GALLERY,
  HOURS,
  PRINCIPLES,
  PROCESS,
  SERIES,
  SITE,
  telHref,
} from "@/lib/site";
import { cn } from "@/lib/utils";

export function HomeView() {
  return (
    <main>
      <Hero />
      <Ticker />
      <About />
      <ServicesBlock />
      <Process />
      <Principles />
      <Gallery />
      <Visit />
      <Faq />
      <Cta />
    </main>
  );
}

function SectionKicker({ index, children }: { index: string; children: string }) {
  return (
    <p className="text-xs tracking-[0.28em] text-accent uppercase">
      {index}
      <span className="mx-3 text-subtle">—</span>
      {children}
    </p>
  );
}

function Hero() {
  return (
    <section className="relative min-h-dvh overflow-hidden">
      <img
        src="/images/hero.jpg"
        alt="Tmavý vůz BMW v dílně MAGNET po setmění"
        width={1792}
        height={1008}
        className="absolute inset-0 size-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/55 to-bg/20" />
      <div className="absolute inset-0 bg-linear-to-r from-bg/80 via-transparent to-transparent" />
      <div className="relative mx-auto flex min-h-dvh max-w-7xl flex-col justify-end px-5 pt-28 pb-28 md:px-8 md:pb-20">
        <Reveal>
          <p className="text-xs tracking-[0.32em] text-fg/70 uppercase">
            Autoservis · Jablonec nad Nisou
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display mt-5 text-[clamp(4.2rem,16vw,11rem)] leading-[0.82] font-semibold tracking-[-0.045em]">
            MAGNET
            <br />
            BMW
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg/80 md:text-xl">
            {SITE.tagline}. Specializovaný servis vozů BMW — originální diagnostika, motory,
            podvozek i péče o lak.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <Link to="/kontakt" hash="objednat">
                Objednat termín
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={telHref()}>
                <Phone className="size-4" />
                {SITE.phoneDisplay}
              </a>
            </Button>
          </div>
        </Reveal>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <OpeningBadge />
          <a
            href="#o-nas"
            className="inline-flex items-center gap-2 text-xs tracking-[0.22em] text-muted uppercase"
          >
            Do dílny
            <ArrowDown className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const items = [...SERIES, ...SERIES];
  return (
    <div className="overflow-hidden border-y border-border bg-surface py-4">
      <div className="marquee-track flex w-max gap-10 pr-10">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-display text-sm tracking-[0.22em] text-muted uppercase"
          >
            {item}
            <span className="ml-10 text-accent">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="o-nas" className="cv-auto mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionKicker index="01">O dílně</SectionKicker>
            <h2 className="font-display mt-5 text-4xl leading-[1.05] font-semibold tracking-tight md:text-6xl">
              Dílna, která značce rozumí
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={80}>
            <p className="font-display text-2xl leading-snug text-fg md:text-3xl">
              BMW není jen značka. Je to přesná, nervózní, krásná technika — a zaslouží si
              servis, který tohle cítí.
            </p>
            <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted">
              <p>
                Specializujeme se na komplexní servis a údržbu vozů BMW. S dlouholetými
                zkušenostmi v oboru bereme na sebe jak pravidelný interval, tak náročnější
                opravy. Vždy podle stejného měřítka: kvalita a bezpečnost, bez kompromisů.
              </p>
              <p>
                Pokud hledáte servis, který vašemu vozu rozumí, navštivte nás v Jablonci nad
                Nisou. Garantujeme, že automobil bude v těch nejlepších rukou.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
      <Reveal delay={120}>
        <figure className="mt-16 overflow-hidden rounded-xl bg-elevated p-2 shadow-border">
          <img
            src="/images/workshop.jpg"
            alt="Interiér dílny MAGNET BMW se zvedákem"
            width={1792}
            height={1008}
            className="aspect-video w-full rounded-lg object-cover"
            loading="lazy"
          />
        </figure>
      </Reveal>
    </section>
  );
}

function ServicesBlock() {
  return (
    <section id="sluzby" className="cv-auto border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <SectionKicker index="02">Služby</SectionKicker>
          <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-display max-w-xl text-4xl leading-[1.05] font-semibold tracking-tight md:text-6xl">
              Co s vozem uděláme
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Od originální diagnostiky po leštění karoserie. Jedna adresa, jeden specialista,
              celý vůz.
            </p>
          </div>
        </Reveal>
        <div className="mt-14">
          <ServicesExplorer />
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="prubeh" className="cv-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <SectionKicker index="03">Průběh</SectionKicker>
          <h2 className="font-display mt-5 max-w-xl text-4xl leading-[1.05] font-semibold tracking-tight md:text-6xl">
            Čtyři kroky, žádné divadlo
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl bg-border shadow-border md:grid-cols-4">
          {PROCESS.map((step, index) => (
            <Reveal key={step.number} delay={index * 80}>
              <article className="h-full bg-bg p-6 md:p-8">
                <p className="font-display text-sm text-accent">{step.number}</p>
                <h3 className="font-display mt-6 text-2xl tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Principles() {
  return (
    <section className="cv-auto mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <SectionKicker index="04">Proč MAGNET</SectionKicker>
        <h2 className="font-display mt-5 max-w-2xl text-4xl leading-[1.05] font-semibold tracking-tight md:text-6xl">
          Neautorizovaný neznamená nepoučený
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-10 md:grid-cols-2">
        {PRINCIPLES.map((item, index) => (
          <Reveal key={item.title} delay={index * 70}>
            <article className="border-t border-border pt-6">
              <h3 className="font-display text-2xl tracking-tight">{item.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="cv-auto border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <SectionKicker index="05">Ateliér</SectionKicker>
          <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
            Klidná dílna, přesná práce
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-6">
          {GALLERY.map((item, index) => (
            <Reveal
              key={item.src}
              delay={index * 50}
              className={item.wide ? "md:col-span-4" : "md:col-span-2"}
            >
              <img
                src={item.src}
                alt={item.alt}
                width={item.wide ? 1792 : 1728}
                height={item.wide ? 1008 : 1152}
                className="aspect-frame h-full w-full rounded-xl object-cover"
                loading="lazy"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="navsteva" className="cv-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionKicker index="06">Návštěva</SectionKicker>
              <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
                Jungmannova 8
              </h2>
              <p className="mt-5 max-w-md text-muted">
                Jablonec nad Nisou. {SITE.address.note}. Obsluhujeme řidiče z Jablonce,
                Liberce, Tanvaldu i celého Jizerského podhůří.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <dl className="mt-10 space-y-6">
                <div>
                  <dt className="text-xs tracking-[0.2em] text-subtle uppercase">Adresa</dt>
                  <dd className="mt-2 text-fg">
                    {SITE.address.line}
                    <br />
                    {SITE.address.zip} {SITE.address.city}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs tracking-[0.2em] text-subtle uppercase">Telefon</dt>
                  <dd className="mt-2">
                    <a href={telHref()} className="text-fg nav-link">
                      {SITE.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs tracking-[0.2em] text-subtle uppercase">Provozní doba</dt>
                  <dd className="mt-2 space-y-1 text-muted">
                    {HOURS.map((row) => (
                      <p key={row.days} className="flex justify-between gap-6">
                        <span>{row.days}</span>
                        <span className="text-fg">{row.time}</span>
                      </p>
                    ))}
                  </dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="primary">
                  <a href={SITE.maps.mapy} target="_blank" rel="noreferrer">
                    <MapPin className="size-4" />
                    Mapy.cz
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={SITE.maps.google} target="_blank" rel="noreferrer">
                    <Navigation className="size-4" />
                    Google Maps
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-xl bg-elevated p-2 shadow-border">
                <iframe
                  title="Mapa MAGNET BMW, Jungmannova 8, Jablonec nad Nisou"
                  src={SITE.maps.googleEmbed}
                  className="aspect-frame w-full rounded-lg border-0 bg-surface grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="cv-auto mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <SectionKicker index="07">Otázky</SectionKicker>
        <h2 className="font-display mt-5 max-w-xl text-4xl font-semibold tracking-tight md:text-6xl">
          Než vyrazíte
        </h2>
      </Reveal>
      <div className="mt-12 max-w-3xl">
        {FAQ.map((item) => (
          <details key={item.q} className="faq-item group border-b border-border py-5">
            <summary className="font-display flex cursor-pointer items-center justify-between gap-6 text-left text-xl tracking-tight">
              {item.q}
              <span
                aria-hidden
                className="grid size-8 shrink-0 place-items-center rounded-full shadow-border transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-2xl pr-12 text-sm leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section
      id="objednat"
      className="cv-auto relative overflow-hidden border-t border-border"
    >
      <img
        src="/images/night.jpg"
        alt=""
        width={1792}
        height={1008}
        className="absolute inset-0 size-full object-cover opacity-35"
        loading="lazy"
        aria-hidden
      />
      <div className="absolute inset-0 bg-bg/80" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionKicker index="08">Termín</SectionKicker>
            <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              Objednejte vůz do dílny
            </h2>
            <p className="mt-5 max-w-md text-muted">
              Napište, co BMW dělá. Zavoláme zpět a najdeme termín. Rychlejší je vždycky
              telefon.
            </p>
            <a
              href={telHref()}
              className="font-display mt-8 inline-flex items-center gap-2 text-2xl tracking-tight text-fg nav-link"
            >
              {SITE.phoneDisplay}
              <ArrowUpRight className="size-5" />
            </a>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={80}>
            <BookingForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function PageIntro({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="border-b border-border pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-xs tracking-[0.28em] text-accent uppercase">{kicker}</p>
        <h1 className="font-display mt-5 max-w-4xl text-5xl leading-[0.95] font-semibold tracking-tight md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">{lede}</p>
      </div>
    </header>
  );
}

export function VisitFacts({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-8 sm:grid-cols-3", className)}>
      <div>
        <p className="text-xs tracking-[0.2em] text-subtle uppercase">Adresa</p>
        <p className="mt-2 text-sm leading-relaxed text-fg">
          {SITE.address.line}
          <br />
          {SITE.address.zip} {SITE.address.city}
        </p>
      </div>
      <div>
        <p className="text-xs tracking-[0.2em] text-subtle uppercase">Telefon</p>
        <a href={telHref()} className="mt-2 block text-sm text-fg nav-link w-fit">
          {SITE.phoneDisplay}
        </a>
      </div>
      <div>
        <p className="text-xs tracking-[0.2em] text-subtle uppercase">Otevírací doba</p>
        <p className="mt-2 text-sm text-muted">Po–Pá 9:00–17:00</p>
        <p className="text-sm text-muted">Sobota po dohodě</p>
      </div>
    </div>
  );
}
