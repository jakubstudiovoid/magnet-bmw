import type { ReactNode } from "react";
import { SiteEffects } from "@/components/effects";
import { CallDock, Footer } from "@/sections/footer";
import { Nav } from "@/sections/nav";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip" href="#obsah">
        Přeskočit na obsah
      </a>
      <SiteEffects />
      <Nav />
      <div id="obsah">{children}</div>
      <Footer />
      <CallDock />
    </>
  );
}
