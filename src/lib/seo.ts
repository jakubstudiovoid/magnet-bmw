import { FAQ, SITE, fullAddress } from "@/lib/site";

export function seoHead(input: {
  title: string;
  description: string;
  path: string;
}) {
  const url = `${SITE.url}${input.path}`;
  return {
    meta: [
      { title: input.title },
      { name: "description", content: input.description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "author", content: SITE.name },
      { name: "theme-color", content: "#0A0A0B" },
      { name: "application-name", content: SITE.name },
      { name: "apple-mobile-web-app-title", content: SITE.shortName },
      { name: "format-detection", content: "telephone=no" },
      { name: "geo.region", content: "CZ-LI" },
      { name: "geo.placename", content: SITE.address.city },
      { name: "geo.position", content: `${SITE.geo.lat};${SITE.geo.lng}` },
      { name: "ICBM", content: `${SITE.geo.lat}, ${SITE.geo.lng}` },
      { name: "language", content: "cs" },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "cs", href: url },
    ],
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    alternateName: "autoservis MAGNET BMW",
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    image: [`${SITE.url}/images/hero.jpg`, `${SITE.url}/images/workshop.jpg`],
    slogan: SITE.tagline,
    priceRange: "$$",
    currenciesAccepted: "CZK",
    paymentAccepted: "Hotovost, karta",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.line,
      addressLocality: SITE.address.city,
      postalCode: SITE.address.zip,
      addressRegion: SITE.region,
      addressCountry: SITE.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    hasMap: SITE.maps.mapy,
    areaServed: [
      { "@type": "City", name: "Jablonec nad Nisou" },
      { "@type": "City", name: "Liberec" },
      { "@type": "City", name: "Tanvald" },
      { "@type": "AdministrativeArea", name: "Liberecký kraj" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    knowsAbout: [
      "BMW",
      "originální diagnostika BMW",
      "generální opravy motoru",
      "opravy podvozku",
      "detailing",
    ],
    brand: { "@type": "Brand", name: "BMW" },
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export { fullAddress };
