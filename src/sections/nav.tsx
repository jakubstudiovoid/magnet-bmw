import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

const links = [
  { href: "#o-nas", label: "O nás" },
  { href: "#sluzby", label: "Služby" },
  { href: "#kontakt", label: "Kontakt" },
];

function Wordmark() {
  return (
    <span className="wordmark text-lg">
      MAGNET
      <span className="wordmark-bmw">BMW</span>
    </span>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    window.dispatchEvent(new CustomEvent("magnet-menu", { detail: open }));
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 " +
        (scrolled || open ? "border-line bg-ink" : "border-transparent bg-transparent")
      }
    >
      <div className="shell flex h-16 items-center justify-between">
        <a href="#uvod" className="text-paper" aria-label="MAGNET BMW, úvod" onClick={() => setOpen(false)}>
          <Wordmark />
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Hlavní">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link text-sm text-paper/80">
              {link.label}
            </a>
          ))}
          <a href={SITE.phoneHref} className="btn btn-fill">
            Zavolat
          </a>
        </nav>
        <button
          type="button"
          className="menu-toggle md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobil"
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="burger" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>
      <div id="menu-mobil" className={open ? "mobile-menu is-open" : "mobile-menu"} aria-hidden={!open}>
        <nav aria-label="Mobilní">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-link"
              style={{ transitionDelay: open ? `${90 + index * 70}ms` : "0ms" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mobile-contact">
          <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
          <a href={SITE.emailHref}>{SITE.email}</a>
        </div>
      </div>
    </header>
  );
}

export function WordmarkLockup() {
  return <Wordmark />;
}
