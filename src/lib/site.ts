export const SITE = {
  name: "MAGNET BMW",
  claim: "Z lásky k automobilům",
  city: "Jablonec nad Nisou",
  phoneDisplay: "+420 739 661 876",
  phoneHref: "tel:+420739661876",
  email: "magnetbmw@gmail.com",
  emailHref: "mailto:magnetbmw@gmail.com",
  street: "Jungmannova 8",
  addressNote: "Vjezd z ulice Smetanova, naproti Smetanova 15.",
  mapsUrl: "https://maps.app.goo.gl/2DoVhM53syWCXq2q8",
  osmUrl:
    "https://www.openstreetmap.org/?mlat=50.7244325&mlon=15.173315#map=18/50.7244325/15.173315",
  osmEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=15.1668%2C50.7218%2C15.1798%2C50.7271&layer=mapnik&marker=50.7244325%2C15.1733150",
  url: "https://www.magnetbmw.cz",
  lat: 50.7244325,
  lon: 15.173315,
} as const;

export const aboutParagraphs = [
  "Specializujeme se na komplexní servis a údržbu vozů BMW. S dlouholetými zkušenostmi nabízíme pravidelnou údržbu i náročnější opravy a vždy dbáme na nejvyšší standardy kvality a bezpečnosti.",
  "Pokud hledáte servis, který rozumí vašemu vozu, navštivte nás v Jablonci nad Nisou. Váš automobil bude v těch nejlepších rukou.",
] as const;

export const services = [
  {
    title: "Originální diagnostika BMW",
    text: "Vůz diagnostikujeme originální výbavou BMW.",
    icon: "scan",
  },
  {
    title: "Generální opravy motoru",
    text: "Náročnější opravy motoru, když běžná údržba nestačí.",
    icon: "engine",
  },
  {
    title: "Opravy podvozku",
    text: "Podvozek jako součást komplexní péče o vůz.",
    icon: "chassis",
  },
  {
    title: "Výměna oleje a filtrů",
    text: "Pravidelná údržba, na které stojí spolehlivý provoz.",
    icon: "oil",
  },
  {
    title: "Ruční mytí",
    text: "Ruční mytí karoserie, pečlivě a bez zbytečného spěchu.",
    icon: "wash",
  },
  {
    title: "Čištění interiéru",
    text: "Péče o interiér, aby byl vůz příjemný na každou cestu.",
    icon: "interior",
  },
  {
    title: "Leštění karoserie",
    text: "Leštění laku jako součást péče o karoserii.",
    icon: "polish",
  },
  {
    title: "Výměna pneu",
    text: "Výměna pneumatik v rámci běžné péče o vůz.",
    icon: "tires",
  },
] as const;

export const reasons = [
  {
    index: "01",
    title: "Specializace na BMW",
    text: "Komplexní servis a údržba vozů BMW. Dílna, která vašemu vozu rozumí.",
  },
  {
    index: "02",
    title: "Dlouholeté zkušenosti",
    text: "S dlouholetými zkušenostmi v oboru bereme pravidelnou údržbu i náročnější opravy.",
  },
  {
    index: "03",
    title: "Kvalita a bezpečnost",
    text: "Nejvyšší standardy kvality a bezpečnosti. Vůz v těch nejlepších rukou.",
  },
] as const;

export function withOrphans(text: string) {
  return text.replace(
    /(^|[\s\u00A0])((?:[AaIiKkOoSsUuVvZz])|(?:[Kk]e|[Ss]e|[Vv]e|[Zz]e|[Nn]a|[Dd]o|[Oo]d|[Pp]o|[Zz]a)) /g,
    "$1$2\u00A0",
  );
}

export const hours = [
  { days: "Pondělí – pátek", time: "9:00 – 17:00" },
  { days: "Sobota", time: "dle domluvy" },
] as const;

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: SITE.name,
  description:
    "Autoservis MAGNET BMW v Jablonci nad Nisou. Komplexní servis a údržba vozů BMW. Z lásky k automobilům.",
  url: SITE.url,
  image: `${SITE.url}/images/about.webp`,
  telephone: "+420739661876",
  email: SITE.email,
  currenciesAccepted: "CZK",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.street,
    addressLocality: SITE.city,
    postalCode: "466 01",
    addressCountry: "CZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.lat,
    longitude: SITE.lon,
  },
  hasMap: SITE.mapsUrl,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  areaServed: {
    "@type": "City",
    name: SITE.city,
  },
  slogan: SITE.claim,
};
