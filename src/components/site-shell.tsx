import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { NAV, SITE, telHref } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { OpeningBadge } from "@/components/opening-badge";
import { ScrollProgress } from "@/components/scroll-progress";
import { cn } from "@/lib/utils";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <a
        href="#obsah"
        className="bg-accent text-accent-fg sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:px-3 focus:py-2"
      >
        Přeskočit na obsah
      </a>
      <ScrollProgress />
      <SiteHeader />
      <div id="obsah">{children}</div>
      <SiteFooter />
      <MobileCallBar />
    </div>
  );
}

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 text-fg">
      <span className="size-2.5 shrink-0 bg-accent" aria-hidden />
      <span className="font-display text-lg font-semibold tracking-tight">
        MAGNET <span className="text-muted">BMW</span>
      </span>
    </Link>
  );
}

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-40 transition-[background-color,box-shadow] duration-200",
        scrolled || open ? "bg-bg/92 shadow-border backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hlavní">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              className="text-sm text-muted nav-link hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <OpeningBadge compact />
          <Button asChild size="sm" variant="accent">
            <a href={telHref()}>
              <Phone className="size-4" />
              {SITE.phoneDisplay}
            </a>
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md text-fg lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 z-30 bg-bg px-5 pt-8 pb-28 transition-opacity duration-200 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        hidden={!open}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobilní">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              className="font-display py-3 text-4xl tracking-tight"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/kontakt"
            hash="objednat"
            className="font-display py-3 text-4xl tracking-tight text-accent"
            onClick={() => setOpen(false)}
          >
            Objednat
          </Link>
        </nav>
        <div className="mt-10">
          <OpeningBadge />
          <a href={telHref()} className="mt-4 block text-lg text-muted">
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border pb-24 lg:pb-10">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            Specializovaný autoservis vozů BMW v Jablonci nad Nisou. Originální diagnostika,
            mechanika i péče o lak.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs tracking-[0.2em] text-subtle uppercase">Dílna</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {SITE.address.line}
            <br />
            {SITE.address.zip} {SITE.address.city}
            <br />
            {SITE.address.note}
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="text-xs tracking-[0.2em] text-subtle uppercase">Kontakt</p>
          <a href={telHref()} className="mt-3 block text-sm text-fg nav-link w-fit">
            {SITE.phoneDisplay}
          </a>
          <p className="mt-2 text-sm text-muted">Po–Pá 9:00–17:00</p>
        </div>
        <div className="md:col-span-2">
          <p className="text-xs tracking-[0.2em] text-subtle uppercase">Navigace</p>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link to="/sluzby" className="text-muted nav-link w-fit hover:text-fg">
              Služby
            </Link>
            <Link to="/kontakt" className="text-muted nav-link w-fit hover:text-fg">
              Kontakt
            </Link>
            <Link to="/ochrana-udaju" className="text-muted nav-link w-fit hover:text-fg">
              Ochrana údajů
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 pb-8 text-xs text-subtle md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © {new Date().getFullYear()} {SITE.name}. {SITE.tagline}.
        </p>
        <p>Nezávislý specialista na vozy BMW · Jablonec nad Nisou</p>
      </div>
    </footer>
  );
}

function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95 p-3 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-2 gap-2">
        <Button asChild variant="outline" size="md">
          <Link to="/kontakt" hash="objednat">
            Objednat
          </Link>
        </Button>
        <Button asChild variant="accent" size="md">
          <a href={telHref()}>
            <Phone className="size-4" />
            Zavolat
          </a>
        </Button>
      </div>
    </div>
  );
}
