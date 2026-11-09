export const site = {
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
  osmEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=15.1668%2C50.7218%2C15.1798%2C50.7271&layer=mapnik&marker=50.7244325%2C15.1733150",
  url: "https://www.magnetbmw.cz",
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: site.name,
  description:
    "Autoservis MAGNET BMW v Jablonci nad Nisou. Komplexní servis a údržba vozů BMW. Z lásky k automobilům.",
  url: site.url,
  image: `${site.url}/images/about.webp`,
  telephone: "+420739661876",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    addressLocality: site.city,
    postalCode: "466 01",
    addressCountry: "CZ",
  },
  geo: { "@type": "GeoCoordinates", latitude: 50.7244325, longitude: 15.173315 },
  hasMap: site.mapsUrl,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  areaServed: { "@type": "City", name: site.city },
  slogan: site.claim,
};
