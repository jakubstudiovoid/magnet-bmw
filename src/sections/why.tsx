import type { CSSProperties } from "react";
import { Photo } from "@/components/photo";
import { reasons, withOrphans } from "@/lib/site";

export function Why() {
  return (
    <section className="bg-paper text-ink" aria-labelledby="proc-my-nadpis">
      <div className="shell band split grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <figure className="order-2 wipe md:order-1">
          <Photo
            name="workshop"
            width={1080}
            height={863}
            alt="Vůz BMW na zvedáku v servisní hale"
            sizes="(min-width: 768px) 46vw, 100vw"
            className="aspect-4/3 w-full"
          />
          <figcaption className="caption text-ink/55">Servisní hala</figcaption>
        </figure>
        <div className="copy order-1 md:order-2">
          <p className="reveal kicker text-ink/60" style={{ "--i": 0 } as CSSProperties}>
            Proč my
          </p>
          <h2
            id="proc-my-nadpis"
            className="reveal headline mt-4 text-balance"
            style={{ "--i": 1 } as CSSProperties}
          >
            {withOrphans("Vůz v těch nejlepších rukou")}
          </h2>
          <ol className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
            {reasons.map((reason, index) => (
              <li
                key={reason.index}
                className="reveal grid grid-cols-[2.75rem_1fr] gap-4 py-5"
                style={{ "--i": index + 2 } as CSSProperties}
              >
                <p className="pt-0.5 text-lg font-medium tracking-tight text-accent">{reason.index}</p>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-balance">{withOrphans(reason.title)}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-pretty text-ink/70">{withOrphans(reason.text)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
