import { useState } from "react";
import { Photo } from "@/components/photo";
import { SITE, hours } from "@/lib/site";

export function Contact() {
  const [mapOn, setMapOn] = useState(false);

  return (
    <section id="kontakt" className="scroll-mt-16 border-t border-line bg-ink">
      <div className="shell band grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="reveal kicker">Kontakt</p>
          <h2 className="reveal headline mt-4" style={{ transitionDelay: "50ms" }}>
            Magnet BMW
          </h2>
          <p className="reveal kicker mt-8" style={{ transitionDelay: "80ms" }}>
            Telefon
          </p>
          <a
            href={SITE.phoneHref}
            className="reveal nav-link mt-2 block w-fit text-3xl font-medium tracking-tight text-paper md:text-4xl"
            style={{ transitionDelay: "90ms" }}
          >
            {SITE.phoneDisplay}
          </a>
          <a
            href={SITE.emailHref}
            className="reveal nav-link mt-2 block w-fit text-base text-paper/80"
            style={{ transitionDelay: "120ms" }}
          >
            {SITE.email}
          </a>
          <div className="reveal mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-1" style={{ transitionDelay: "150ms" }}>
            <div>
              <p className="kicker">Adresa</p>
              <p className="mt-1.5 text-sm leading-relaxed">
                {SITE.street}
                <br />
                {SITE.city}
              </p>
              <p className="mt-1 max-w-xs text-sm text-paper/65">{SITE.addressNote}</p>
            </div>
            <div>
              <p className="kicker">Provozní doba</p>
              <dl className="mt-1.5 space-y-1 text-sm">
                {hours.map((row) => (
                  <div key={row.days} className="flex justify-between gap-4 text-paper/75">
                    <dt>{row.days}</dt>
                    <dd className="text-right text-paper">{row.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row" style={{ transitionDelay: "190ms" }}>
            <a href={SITE.phoneHref} className="btn btn-fill">
              Objednat servis
            </a>
            <a href={SITE.mapsUrl} className="btn btn-ghost" target="_blank" rel="noreferrer">
              Navigovat
            </a>
          </div>
        </div>
        <div className="grid gap-5 lg:col-span-7">
          <figure className="wipe wipe-late">
            <Photo
              name="entrance"
              width={1800}
              height={1012}
              alt="Vjezd do autoservisu MAGNET BMW z ulice Smetanova, označený modrou šipkou"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-video w-full"
            />
            <figcaption className="caption text-mist">Vjezd ze Smetanovy ulice</figcaption>
          </figure>
          <div className="reveal border border-line">
            {mapOn ? (
              <iframe
                title="Mapa MAGNET BMW, Jungmannova 8, Jablonec nad Nisou"
                src={SITE.osmEmbed}
                className="aspect-video w-full border-0 grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="relative">
                <Photo
                  name="map"
                  width={1220}
                  height={686}
                  alt="Schéma příjezdu k autoservisu MAGNET BMW mezi ulicemi Smetanova a Jungmannova"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="aspect-video w-full"
                />
                <div className="absolute inset-0 flex items-start p-3 md:p-4">
                  <button type="button" className="btn btn-fill" onClick={() => setMapOn(true)}>
                    Zobrazit mapu
                  </button>
                </div>
              </div>
            )}
          </div>
          <p className="text-xs leading-relaxed text-paper/50">
            Interaktivní mapa se načte z OpenStreetMap až po kliknutí. Do té doby web neukládá cookies.
          </p>
        </div>
      </div>
    </section>
  );
}
