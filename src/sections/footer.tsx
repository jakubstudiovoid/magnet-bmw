import { SITE } from "@/lib/site";
import { WordmarkLockup } from "@/sections/nav";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink pb-24 md:pb-0">
      <div className="shell py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-end md:gap-16">
          <div>
            <a href="#uvod" className="inline-flex text-paper no-underline" aria-label="Zpět nahoru">
              <WordmarkLockup />
            </a>
            <p className="mt-4 text-sm text-paper/60">{SITE.claim}.</p>
            <p className="text-sm text-paper/60">Autoservis v Jablonci nad Nisou.</p>
          </div>
          <address className="text-sm leading-relaxed text-paper/70 not-italic md:text-right">
            {SITE.street}, {SITE.city}
            <br />
            <a className="text-inherit no-underline" href={SITE.phoneHref}>
              {SITE.phoneDisplay}
            </a>
            <br />
            <a className="text-inherit no-underline" href={SITE.emailHref}>
              {SITE.email}
            </a>
            <a className="nav-link mt-4 flex w-fit md:ml-auto" href="/ochrana-osobnich-udaju">
              Zásady ochrany osobních údajů
            </a>
          </address>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-5 text-[0.68rem] font-medium tracking-[0.14em] text-paper/45 uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} MAGNET BMW</p>
          <a
            className="text-inherit no-underline"
            href="https://studiovoid.cz"
            target="_blank"
            rel="noreferrer"
          >
            Vytvořilo studiovoid.cz
          </a>
        </div>
      </div>
    </footer>
  );
}

export function CallDock() {
  return (
    <a className="call-dock" href={SITE.phoneHref}>
      Zavolat
    </a>
  );
}
