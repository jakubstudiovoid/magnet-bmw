import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-bg px-6 text-center text-fg">
      <p className="text-xs tracking-[0.28em] text-accent uppercase">404</p>
      <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
        Tahle zatáčka tu není
      </h1>
      <p className="mt-4 max-w-md text-muted">
        Stránka, kterou hledáte, v MAGNET BMW neexistuje. Vraťte se do dílny.
      </p>
      <Button asChild className="mt-8">
        <Link to="/">Zpět na úvod</Link>
      </Button>
    </main>
  );
}
