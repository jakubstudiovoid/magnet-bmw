import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Navigation, Phone } from "lucide-react";
import { BookingForm } from "@/components/booking-form";
import { PageIntro, VisitFacts } from "@/components/home-view";
import { JsonLd } from "@/components/json-ld";
import { OpeningBadge } from "@/components/opening-badge";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { breadcrumbJsonLd, localBusinessJsonLd, seoHead } from "@/lib/seo";
import { HOURS, SITE, telHref } from "@/lib/site";

export const Route = createFileRoute("/kontakt")({
  head: () =>
    seoHead({
      title: `Kontakt | ${SITE.name} — Jungmannova 8, Jablonec nad Nisou`,
      description: `Autoservis MAGNET BMW, ${SITE.address.line}, ${SITE.address.zip} ${SITE.address.city}. Telefon ${SITE.phoneDisplay}. Po–Pá 9:00–17:00, sobota po dohodě.`,
      path: "/kontakt",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Úvod", path: "/" },
          { name: "Kontakt", path: "/kontakt" },
        ])}
      />
      <main>
        <PageIntro
          kicker="Kontakt"
          title="Zastavte se. Nebo zavolejte."
          lede={`${SITE.address.note}. Jsme v Jablonci nad Nisou, pár minut od centra.`}
        />
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <VisitFacts />
          <div className="mt-8">
            <OpeningBadge />
          </div>
          <div className="mt-14 grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <h2 className="font-display text-3xl tracking-tight">Provozní doba</h2>
              <ul className="mt-6 space-y-3 text-sm">
                {HOURS.map((row) => (
                  <li key={row.days} className="flex justify-between gap-6 border-b border-border py-3">
                    <span className="text-muted">{row.days}</span>
                    <span>{row.time}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="accent">
                  <a href={telHref()}>
                    <Phone className="size-4" />
                    {SITE.phoneDisplay}
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={SITE.maps.mapy} target="_blank" rel="noreferrer">
                    <MapPin className="size-4" />
                    Mapy.cz
                  </a>
                </Button>
                <Button asChild variant="ghost">
                  <a href={SITE.maps.google} target="_blank" rel="noreferrer">
                    <Navigation className="size-4" />
                    Google
                  </a>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={80} className="lg:col-span-7">
              <div className="overflow-hidden rounded-xl bg-elevated p-2 shadow-border">
                <iframe
                  title="Mapa MAGNET BMW"
                  src={SITE.maps.googleEmbed}
                  className="aspect-frame w-full rounded-lg border-0 bg-surface grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </section>
        <section id="objednat" className="border-t border-border">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-display text-4xl tracking-tight">Objednat termín</h2>
              <p className="mt-4 max-w-md text-muted">
                Formulář nic neodesílá do cloudu. Složí poptávku a termín potvrdíme telefonem —
                tak, jak to v dílně má být.
              </p>
            </div>
            <div className="lg:col-span-7">
              <BookingForm />
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
