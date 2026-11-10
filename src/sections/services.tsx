import {
  Armchair,
  CircleDot,
  Cog,
  Droplets,
  ScanLine,
  Sparkles,
  Waves,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/site";

const icons: Record<(typeof services)[number]["icon"], LucideIcon> = {
  scan: ScanLine,
  engine: Cog,
  chassis: Wrench,
  oil: Droplets,
  wash: Waves,
  interior: Armchair,
  polish: Sparkles,
  tires: CircleDot,
};

export function Services() {
  return (
    <section id="sluzby" className="scroll-mt-16 border-t border-line bg-ink">
      <div className="shell band">
        <div className="max-w-xl">
          <p className="reveal kicker">Naše služby</p>
          <h2 className="reveal headline mt-4" style={{ transitionDelay: "60ms" }}>
            Co poskytujeme
          </h2>
          <p className="reveal mt-4 text-base leading-relaxed text-paper/70" style={{ transitionDelay: "100ms" }}>
            Od originální diagnostiky po péči o karoserii. A další práce, které k servisu BMW patří.
          </p>
        </div>
        <ul className="mt-10 border-t border-line md:mt-14">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <li
                key={service.title}
                className="service-row group reveal grid grid-cols-[1.5rem_1fr] items-center gap-x-4 gap-y-1 border-b border-line py-5 md:grid-cols-[1.5rem_minmax(0,18rem)_1fr] md:gap-8 md:py-6"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <Icon
                  className="service-icon row-span-2 size-5 md:row-span-1"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="text-lg font-medium tracking-tight">{service.title}</h3>
                <p className="col-start-2 text-sm leading-relaxed text-paper/65 md:col-start-3 md:text-base">
                  {service.text}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
