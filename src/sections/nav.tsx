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
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 " +
        (scrolled || open ? "border-paper/10 bg-ink/80 backdrop-blur-md" : "border-transparent bg-transparent")
      }
    >
      <div className="shell flex h-16 items-center justify-between">
        <a href="#uvod" className="text-paper" aria-label="MAGNET BMW, úvod">
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
          className="btn btn-ghost md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobil"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Zavřít" : "Menu"}
        </button>
      </div>
      {open ? (
        <div
          id="menu-mobil"
          className="fixed inset-0 top-16 z-40 flex flex-col bg-ink px-6 pt-10 md:hidden"
        >
          <nav className="flex flex-col gap-5" aria-label="Mobilní">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="headline text-paper"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a href={SITE.phoneHref} className="btn btn-fill mt-10 w-fit">
            Zavolat
          </a>
        </div>
      ) : null}
    </header>
  );
}

export function WordmarkLockup() {
  return <Wordmark />;
}
