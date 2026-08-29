import { createFileRoute } from "@tanstack/react-router";
import { HomeView } from "@/components/home-view";
import { JsonLd } from "@/components/json-ld";
import { SiteShell } from "@/components/site-shell";
import { faqJsonLd, localBusinessJsonLd, seoHead } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    seoHead({
      title: `${SITE.name} | Specializovaný autoservis BMW v Jablonci nad Nisou`,
      description: SITE.description,
      path: "/",
    }),
  component: Home,
});

function Home() {
  return (
    <SiteShell>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={faqJsonLd()} />
      <HomeView />
    </SiteShell>
  );
}
