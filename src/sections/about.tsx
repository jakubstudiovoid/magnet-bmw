import { Photo } from "@/components/photo";
import { aboutParagraphs, withOrphans } from "@/lib/site";

export function About() {
  return (
    <section id="o-nas" className="scroll-mt-16 bg-paper text-ink">
      <div className="shell band grid items-center gap-10 md:grid-cols-12 md:gap-16">
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
        <div className="order-1 md:order-2 md:col-span-5">
          <p className="reveal kicker text-ink/60">O nás</p>
          <h2 className="reveal headline mt-4 text-balance" style={{ transitionDelay: "60ms" }}>
            {withOrphans("Servis, který vozu rozumí")}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-pretty text-ink/75">
            {aboutParagraphs.map((paragraph, index) => (
              <p key={paragraph.slice(0, 16)} className="reveal" style={{ transitionDelay: `${100 + index * 60}ms` }}>
                {withOrphans(paragraph)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
