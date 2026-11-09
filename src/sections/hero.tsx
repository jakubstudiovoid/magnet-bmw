import { Photo } from "@/components/photo";
import { SITE, hours } from "@/lib/site";

export function Hero() {
  return (
    <section id="uvod" className="hero relative flex items-end overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Photo
          name="headlight"
          width={1920}
          height={815}
          alt=""
          priority
          sizes="100vw"
          className="hero-photo absolute inset-0 h-full w-full"
          objectPosition="70% center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/55 to-ink/20" />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/75 to-transparent" />
      </div>
      <div className="shell relative z-10 pt-28 pb-10 md:pt-32 md:pb-12">
        <p className="fade-up kicker" style={{ animationDelay: "0.1s" }}>
          Autoservis · {SITE.city}
        </p>
        <h1 className="display mt-4">
          <span className="mask">
            <span className="mask-in" style={{ animationDelay: "0.16s" }}>
              MAGNET
            </span>
          </span>
          <span className="mask">
            <span className="mask-in display-line" style={{ animationDelay: "0.26s" }}>
              BMW
            </span>
          </span>
        </h1>
        <p className="fade-up mt-6 max-w-sm text-base text-paper/80 md:text-lg" style={{ animationDelay: "0.4s" }}>
          {SITE.claim}
        </p>
        <dl className="meta-rail">
          <div>
            <dt className="kicker">Adresa</dt>
            <dd>
              <a href="#kontakt">{SITE.street}</a>
              <span className="mt-0.5 block text-xs font-normal tracking-normal text-paper/65">{SITE.city}</span>
            </dd>
          </div>
          <div>
            <dt className="kicker">Provoz</dt>
            <dd>
              {hours[0].time}
              <span className="mt-0.5 block text-xs font-normal tracking-normal text-paper/65 lowercase">
                {hours[0].days}
                <br />
                Sobota: {hours[1].time}
              </span>
            </dd>
          </div>
          <div>
            <dt className="kicker">Kontakt</dt>
            <dd>
              <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
              <a className="mt-0.5 block text-xs font-normal tracking-normal text-paper/70" href={SITE.emailHref}>
                {SITE.email}
              </a>
            </dd>
          </div>
        </dl>
        <div className="fade-up mt-8 flex flex-col gap-2 sm:flex-row" style={{ animationDelay: "0.5s" }}>
          <a href={SITE.phoneHref} className="btn btn-fill">
            Objednat servis
          </a>
          <a href="#sluzby" className="btn btn-ghost">
            Služby
          </a>
        </div>
      </div>
    </section>
  );
}
