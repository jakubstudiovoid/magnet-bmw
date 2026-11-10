import type { CSSProperties } from "react";
import { Photo } from "@/components/photo";
import { aboutParagraphs, withOrphans } from "@/lib/site";

export function About() {
  return (
    <section id="o-nas" className="scroll-mt-16 bg-paper text-ink">
      <div className="shell band split grid items-center gap-10 md:grid-cols-12 md:gap-16">
        <figure className="order-2 wipe md:order-1 md:col-span-7">
          <Photo
            name="about"
            width={1618}
            height={1076}
            alt="Průčelí autoservisu MAGNET BMW na Jungmannově ulici v Jablonci nad Nisou"
            sizes="(min-width: 768px) 55vw, 100vw"
            fit="natural"
            className="w-full"
          />
          <figcaption className="caption text-ink/55">Jungmannova 8 · Jablonec nad Nisou</figcaption>
        </figure>
        <div className="copy order-1 md:order-2 md:col-span-5">
          <p className="reveal kicker text-ink/60" style={{ "--i": 0 } as CSSProperties}>
            O nás
          </p>
          <h2 className="reveal headline mt-4 text-balance" style={{ "--i": 1 } as CSSProperties}>
            {withOrphans("Servis, který vozu rozumí")}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-pretty text-ink/75">
            {aboutParagraphs.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 16)}
                className="reveal"
                style={{ "--i": index + 2 } as CSSProperties}
              >
                {withOrphans(paragraph)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
