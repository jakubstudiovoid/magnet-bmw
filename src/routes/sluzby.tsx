import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/home-view";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { ServicesGrid } from "@/components/services-explorer";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { breadcrumbJsonLd, localBusinessJsonLd, seoHead } from "@/lib/seo";
import { SITE, telHref } from "@/lib/site";

export const Route = createFileRoute("/sluzby")({
  head: () =>
    seoHead({
      title: `Služby | ${SITE.name} — diagnostika, motory, podvozek, detailing`,
      description:
        "Originální diagnostika BMW, generální opravy motoru, podvozek, výměna oleje a filtrů, ruční mytí, čištění interiéru, leštění karoserie a výměna pneu v Jablonci nad Nisou.",
      path: "/sluzby",
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteShell>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Úvod", path: "/" },
          { name: "Služby", path: "/sluzby" },
        ])}
      />
      <main>
        <PageIntro
          kicker="Služby"
          title="Kompletní péče o vozy BMW"
          lede="Mechanika, diagnostika i vzhled. V MAGNET BMW držíme vůz v jedné dílně — od olejového servisu po generálku motoru."
        />
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <ServicesGrid />
          <Reveal>
            <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-xl bg-elevated p-6 shadow-border md:flex-row md:items-center md:p-8">
              <div>
                <p className="font-display text-2xl tracking-tight">Nejste si jistí, co vůz potřebuje?</p>
                <p className="mt-2 max-w-lg text-sm text-muted">
                  Zavolejte. Zeptáme se na pár věcí a navrhneme první krok — většinou diagnostiku.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="accent">
                  <a href={telHref()}>{SITE.phoneDisplay}</a>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/kontakt" hash="objednat">
                    Objednat termín
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </SiteShell>
  );
}
