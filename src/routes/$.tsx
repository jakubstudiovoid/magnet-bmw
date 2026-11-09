import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFrame } from "@/components/site-frame";

export const Route = createFileRoute("/$")({
  component: NotFoundPage,
  head: () => ({
    meta: [
      { title: "Stránka nenalezena — MAGNET BMW" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function NotFoundPage() {
  return (
    <SiteFrame>
      <main className="shell flex min-h-[70svh] flex-col justify-end pt-24 pb-16">
        <p className="kicker">404</p>
        <h1 className="headline mt-3">
          Tahle
          <br />
          stránka tu není
        </h1>
        <p className="mt-6 max-w-md text-paper/70">
          Adresa nevede na žádnou část webu MAGNET BMW. Vraťte se na úvod, nebo rovnou zavolejte.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className="btn btn-fill">
            Na úvod
          </Link>
          <a href="tel:+420739661876" className="btn btn-ghost">
            Zavolat
          </a>
        </div>
      </main>
    </SiteFrame>
  );
}
