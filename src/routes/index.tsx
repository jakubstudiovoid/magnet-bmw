import { createFileRoute } from "@tanstack/react-router";
import { SiteFrame } from "@/components/site-frame";
import { jsonLd } from "@/lib/site";
import { About } from "@/sections/about";
import { Contact } from "@/sections/contact";
import { Hero } from "@/sections/hero";
import { Services } from "@/sections/services";
import { Why } from "@/sections/why";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "MAGNET BMW — servis BMW Jablonec nad Nisou" },
      {
        name: "description",
        content:
          "Autoservis MAGNET BMW, Jungmannova 8, Jablonec nad Nisou. Komplexní servis a údržba vozů BMW: diagnostika, motory, podvozek, olej, mytí, interiér, leštění a pneu. Z lásky k automobilům.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.magnetbmw.cz/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
});

function Home() {
  return (
    <SiteFrame>
      <main>
        <Hero />
        <About />
        <Services />
        <Why />
        <Contact />
      </main>
    </SiteFrame>
  );
}
