import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/home-view";
import { SiteShell } from "@/components/site-shell";
import { seoHead } from "@/lib/seo";
import { SITE, telHref } from "@/lib/site";

export const Route = createFileRoute("/ochrana-udaju")({
  head: () =>
    seoHead({
      title: `Ochrana osobních údajů | ${SITE.name}`,
      description: `Informace o zpracování osobních údajů autoservisu ${SITE.name} v Jablonci nad Nisou.`,
      path: "/ochrana-udaju",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteShell>
      <main>
        <PageIntro
          kicker="Soukromí"
          title="Ochrana osobních údajů"
          lede="Krátce a poctivě: web nesbírá marketingové cookies a poptávku vyřizujeme telefonem."
        />
        <article className="mx-auto max-w-3xl px-5 py-16 text-base leading-relaxed text-muted md:px-8">
          <h2 className="font-display text-2xl text-fg">Správce</h2>
          <p className="mt-3">
            Správcem osobních údajů je {SITE.name}, {SITE.address.line}, {SITE.address.zip}{" "}
            {SITE.address.city}. Kontakt:{" "}
            <a href={telHref()} className="text-fg nav-link">
              {SITE.phoneDisplay}
            </a>
            .
          </p>

          <h2 className="font-display mt-10 text-2xl text-fg">Jaké údaje zpracováváme</h2>
          <p className="mt-3">
            Pokud nám zavoláte nebo vyplníte poptávku termínu, zpracujeme jméno, telefon, model
            vozu a obsah zprávy — výhradně proto, abychom s vámi domluvili servis. Právním
            základem je plnění opatření před uzavřením smlouvy a oprávněný zájem na vyřízení
            poptávky.
          </p>

          <h2 className="font-display mt-10 text-2xl text-fg">Cookies a měření</h2>
          <p className="mt-3">
            Web nepoužívá marketingové ani analytické cookies třetích stran. Neprovozujeme Google
            Analytics ani reklamní pixely. Technicky nutné údaje (například ukládání zobrazení
            stránek v prohlížeči) se k nám neodesílají. Mapa na stránce Kontakt je vložena z
            Google Maps; při jejím zobrazení se můžete setkat se soubory cookies společnosti
            Google podle jejich vlastních zásad.
          </p>

          <h2 className="font-display mt-10 text-2xl text-fg">Doba uložení</h2>
          <p className="mt-3">
            Údaje z poptávky držíme jen po dobu vyřízení termínu a případné následné komunikace
            o opravě, nejdéle však po dobu stanovenou účetními a daňovými předpisy, pokud z
            opravy vznikne doklad.
          </p>

          <h2 className="font-display mt-10 text-2xl text-fg">Vaše práva</h2>
          <p className="mt-3">
            Máte právo na přístup, opravu, výmaz, omezení zpracování a vznést námitku. Stížnost
            můžete podat u Úřadu pro ochranu osobních údajů. Pro uplatnění práv volejte na{" "}
            <a href={telHref()} className="text-fg nav-link">
              {SITE.phoneDisplay}
            </a>
            .
          </p>
        </article>
      </main>
    </SiteShell>
  );
}
