import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFrame } from "@/components/site-frame";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/ochrana-osobnich-udaju")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Zásady ochrany osobních údajů — MAGNET BMW" },
      {
        name: "description",
        content:
          "Jak autoservis MAGNET BMW nakládá s osobními údaji. Web nepoužívá analytiku ani cookies, dokud si sami nenačtete mapu.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.magnetbmw.cz/ochrana-osobnich-udaju" }],
  }),
});

function PrivacyPage() {
  return (
    <SiteFrame>
      <main className="shell pt-24 pb-16">
        <p className="kicker">Ochrana údajů</p>
        <h1 className="headline mt-3 max-w-3xl">Zásady ochrany osobních údajů</h1>
        <div className="mt-6 max-w-2xl space-y-4 text-sm leading-relaxed text-paper/75 md:text-base">
          <p>
            Správcem údajů je autoservis {SITE.name}, {SITE.street}, {SITE.city}, e-mail{" "}
            <a className="nav-link text-paper" href={SITE.emailHref}>
              {SITE.email}
            </a>
            , telefon{" "}
            <a className="nav-link text-paper" href={SITE.phoneHref}>
              {SITE.phoneDisplay}
            </a>
            .
          </p>
          <p>
            Tento web je statická prezentace. Nemá formuláře, uživatelské účty ani analytiku. Kliknutím
            na telefon nebo e-mail se údaje nepředávají webu — otevře se vaše telefonní nebo e-mailová
            aplikace.
          </p>
          <p>
            Samotný web neukládá cookies. Interaktivní mapa se z OpenStreetMap načte až ve chvíli, kdy
            na stránce kontaktu zvolíte „Zobrazit mapu“. Tehdy může OpenStreetMap uložit vlastní cookies
            podle svých pravidel. Tlačítko „Navigovat“ jen otevře mapu v nové kartě.
          </p>
          <p>
            Pokud nám zavoláte nebo napíšete, zpracujeme kontakt a obsah zprávy jen proto, abychom
            vyřídili servisní poptávku. Údaje neprodáváme a nepředáváme je k marketingu.
          </p>
          <p>
            Máte právo na přístup, opravu, výmaz, omezení zpracování a podání stížnosti u Úřadu pro
            ochranu osobních údajů. Stačí napsat na {SITE.email}.
          </p>
          <p>
            <Link to="/" className="nav-link text-paper">
              Zpět na úvod
            </Link>
          </p>
        </div>
      </main>
    </SiteFrame>
  );
}
