import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function ServicesExplorer() {
  const [active, setActive] = useState(0);
  const current = SERVICES[active] ?? SERVICES[0];

  return (
    <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-6">
        {SERVICES.map((service, index) => {
          const isActive = index === active;
          return (
            <button
              key={service.slug}
              type="button"
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              className={cn(
                "flex w-full items-baseline gap-5 border-b border-border py-5 text-left transition-colors duration-200",
                isActive ? "text-fg" : "text-muted hover:text-fg",
              )}
            >
              <span
                className={cn(
                  "font-display w-8 shrink-0 text-sm",
                  isActive ? "text-accent" : "text-subtle",
                )}
              >
                {service.number}
              </span>
              <span className="font-display flex-1 text-xl tracking-tight md:text-2xl">
                {service.title}
              </span>
            </button>
          );
        })}
      </div>
      <div className="lg:col-span-6">
        <div className="overflow-hidden rounded-xl bg-elevated p-2 shadow-border">
          <div className="relative aspect-photo overflow-hidden rounded-lg bg-surface">
            {SERVICES.map((service, index) => (
              <img
                key={service.slug}
                src={service.image}
                alt={service.imageAlt}
                width={1728}
                height={1152}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                className={cn(
                  "absolute inset-0 size-full object-cover transition-opacity duration-500",
                  index === active ? "opacity-100" : "opacity-0",
                )}
              />
            ))}
          </div>
          <div className="px-4 pt-5 pb-4 md:px-5">
            <p className="font-display text-lg text-fg">{current.title}</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{current.body}</p>
            <Link
              to="/sluzby"
              className="mt-4 inline-flex items-center gap-1 text-sm text-fg nav-link"
            >
              Všechny služby
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServicesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {SERVICES.map((service, index) => (
        <Reveal key={service.slug} delay={index * 60}>
          <article className="h-full overflow-hidden rounded-xl bg-elevated p-2 shadow-border">
            <img
              src={service.image}
              alt={service.imageAlt}
              width={1728}
              height={1152}
              className="aspect-photo w-full rounded-lg object-cover"
              loading="lazy"
            />
            <div className="px-4 pt-5 pb-4">
              <p className="text-xs tracking-[0.2em] text-accent uppercase">{service.number}</p>
              <h2 className="font-display mt-2 text-2xl tracking-tight">{service.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{service.body}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
