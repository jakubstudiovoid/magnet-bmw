import { useEffect } from "react";
import Lenis from "lenis";

export function SiteEffects() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const lenis = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
      autoRaf: false,
    });

    let frame = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    const photo = document.querySelector<HTMLElement>("[data-parallax]");
    const onScroll = () => {
      if (!photo) return;
      const y = lenis.scroll * 0.18;
      photo.style.transform = `translate3d(0, ${y}px, 0) scale(1.08)`;
    };
    lenis.on("scroll", onScroll);

    const nodes = document.querySelectorAll<HTMLElement>(".reveal, .fade-up, .wipe");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );
    nodes.forEach((node) => io.observe(node));

    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest("a[href^='#']");
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector<HTMLElement>(href);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target, { offset: href === "#uvod" ? 0 : -72 });
      history.pushState(null, "", href);
    };
    document.addEventListener("click", onClick);

    const onMenu = (event: Event) => {
      const open = (event as CustomEvent<boolean>).detail;
      if (open) lenis.stop();
      else lenis.start();
    };
    window.addEventListener("magnet-menu", onMenu);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      io.disconnect();
      document.removeEventListener("click", onClick);
      window.removeEventListener("magnet-menu", onMenu);
    };
  }, []);

  return null;
}
