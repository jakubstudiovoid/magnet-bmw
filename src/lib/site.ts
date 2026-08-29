export const SITE = {
  name: "MAGNET BMW",
  shortName: "MAGNET",
  tagline: "Z lásky k automobilům",
  description:
    "Specializovaný autoservis vozů BMW v Jablonci nad Nisou. Originální diagnostika BMW, opravy motoru a podvozku, výměna oleje, pneuservis a ruční detailing.",
  url: "https://www.magnetbmw.cz",
  phone: "+420739661876",
  phoneDisplay: "+420 739 661 876",
  locale: "cs_CZ",
  address: {
    line: "Jungmannova 685/8",
    streetShort: "Jungmannova 8",
    city: "Jablonec nad Nisou",
    zip: "466 01",
    country: "Česko",
    countryCode: "CZ",
    note: "Vjezd z ulice Smetanova, naproti Smetanova 15",
  },
  geo: {
    lat: 50.7244325,
    lng: 15.1733153,
  },
  region: "Liberecký kraj",
  maps: {
    google:
      "https://www.google.com/maps/search/?api=1&query=Jungmannova+685%2F8%2C+466+01+Jablonec+nad+Nisou",
    googleEmbed:
      "https://maps.google.com/maps?q=Jungmannova+685%2F8,+466+01+Jablonec+nad+Nisou&hl=cs&z=17&output=embed",
    mapy: "https://mapy.cz/zakladni?x=15.173315&y=50.724432&z=18",
  },
} as const;

export const NAV = [
  { href: "/#o-nas", label: "O dílně", to: "/" as const, hash: "o-nas" },
  { href: "/sluzby", label: "Služby", to: "/sluzby" as const, hash: undefined },
  { href: "/#prubeh", label: "Průběh", to: "/" as const, hash: "prubeh" },
  { href: "/kontakt", label: "Kontakt", to: "/kontakt" as const, hash: undefined },
] as const;

export const HOURS = [
  { days: "Pondělí – pátek", time: "9:00 – 17:00", short: "Po–Pá 9:00–17:00" },
  { days: "Sobota", time: "po telefonické dohodě", short: "So po dohodě" },
  { days: "Neděle", time: "zavřeno", short: "Ne zavřeno" },
] as const;

export const SERVICES = [
  {
    slug: "diagnostika",
    number: "01",
    title: "Originální diagnostika BMW",
    excerpt: "Čteme vůz stejným jazykem, jakým byl postaven.",
    body: "Originální diagnostika BMW odhalí závady, skryté hlášky i stav systémů dřív, než se z drobnosti stane drahá oprava. Testujeme elektroniku, motory, podvozek i asistenční systace — přesně a bez dohadů.",
    image: "/images/diagnostics.jpg",
    imageAlt: "Diagnostika motoru vozu BMW v dílně MAGNET",
  },
  {
    slug: "motor",
    number: "02",
    title: "Generální opravy motoru",
    excerpt: "Když má motor odejít, nebo znovu začít.",
    body: "Od měření kompresí po generální opravu. BMW motory mají svůj charakter a své slabiny — známe obojí. Práce probíhá s důrazem na vůle, těsnění, rozvody a čistotu, která rozhoduje o životnosti.",
    image: "/images/engine.jpg",
    imageAlt: "Detail motorového prostoru vozu BMW",
  },
  {
    slug: "podvozek",
    number: "03",
    title: "Opravy podvozku",
    excerpt: "Ticho, jistota, čistá stopa.",
    body: "Ramena, silentbloky, tlumiče, brzdy, ložiska. Podvozek BMW má být přesný, ne unavený. Opravíme to, co klepe, táhne nebo bere jistotu v zatáčce — a vůz vrátíme pocitu, který od značky čekáte.",
    image: "/images/chassis.jpg",
    imageAlt: "Podvozek vozu na zvedáku v autoservisu MAGNET BMW",
  },
  {
    slug: "olej",
    number: "04",
    title: "Výměna oleje a filtrů",
    excerpt: "Servisní interval, který motor pozná.",
    body: "Správná specifikace oleje, filtry, reset intervalů. Pravidelná údržba je u BMW základ, ne formalita. Vyměníme olej a filtry tak, aby motor, převodovka i pomocné okruhy dostaly to, co mají v dokumentaci.",
    image: "/images/workshop.jpg",
    imageAlt: "Dílna MAGNET BMW připravená na servisní interval",
  },
  {
    slug: "myti",
    number: "05",
    title: "Ruční mytí",
    excerpt: "Lak se nemyje kartáčem, ale dlaní.",
    body: "Ruční mytí šetrné k laku. Žádné automatické kartáče, žádné škrábance z spěchu. Vůz umyjeme tak, jak byste to udělali sami — kdybyste měli čas, kbelík a cit.",
    image: "/images/detailing.jpg",
    imageAlt: "Ruční mytí tmavého vozu s pěnou",
  },
  {
    slug: "interier",
    number: "06",
    title: "Čištění interiéru",
    excerpt: "Kabina, ve které se znovu chce sedět.",
    body: "Kůže, tkaniny, koberce, plastové plochy. Interiér BMW je navržený jako místo k životu — vrátíme mu vůni čistoty, bez chemie, která by materiály sežrala.",
    image: "/images/interior.jpg",
    imageAlt: "Čištění interiéru vozu BMW",
  },
  {
    slug: "lesteni",
    number: "07",
    title: "Leštění karoserie",
    excerpt: "Hloubka laku, ne jen lesk na fotku.",
    body: "Korekce laku a leštění karoserie. Odstraníme opony z myčky a vrátíme laku hloubku, kterou měl, když vůz opouštěl showroom.",
    image: "/images/night.jpg",
    imageAlt: "Leštěný tmavý sedan na mokré vozovce",
  },
  {
    slug: "pneu",
    number: "08",
    title: "Výměna pneu",
    excerpt: "Sezóna, píchlá, nová sada — bez čekání v supermarketu.",
    body: "Přezutí, vyvážení, kontrola stavu. Pneumatiky jsou jediné, co drží vůz na silnici. Vyměníme je poctivě a řekneme vám, kdy už další sezónu nezvládnou.",
    image: "/images/chassis.jpg",
    imageAlt: "Kolo a brzdový kotouč vozu BMW",
  },
] as const;

export const PROCESS = [
  {
    number: "01",
    title: "Ozvete se",
    body: "Zavolejte nebo pošlete poptávku. Stačí model, přibližný nájezd a to, co vůz dělá — nebo nedělá.",
  },
  {
    number: "02",
    title: "Diagnostika",
    body: "Vůz vezmeme na originální diagnostiku BMW a na zvedák. Najdeme příčinu, ne jen hlášku.",
  },
  {
    number: "03",
    title: "Schválení",
    body: "Navrhneme práci a cenu dřív, než sáhnete do kapsy. Bez překvapení na konci dne.",
  },
  {
    number: "04",
    title: "Předání",
    body: "Auto vrátíme čisté v tom, co bylo dohodnuto. Vysvětlíme, co jsme udělali a co může počkat.",
  },
] as const;

export const PRINCIPLES = [
  {
    title: "Jen BMW",
    body: "Nejsme univerzální servis všeho. Specializujeme se na vozy BMW — a jdeme v nich do hloubky.",
  },
  {
    title: "Originální diagnostika",
    body: "Čteme řídicí jednotky tak, jak je čte značka. Žádné hádání podle kontrolky.",
  },
  {
    title: "Jedna dílna, celý vůz",
    body: "Od oleje po generálku motoru, od podvozku po leštění. Nemusíte jezdit po městě s jedním autem na tři adresy.",
  },
  {
    title: "Lidská řeč",
    body: "Řekneme, co je nutné, co je rozumné a co může počkat. Váš vůz, vaše rozhodnutí.",
  },
] as const;

export const FAQ = [
  {
    q: "Děláte jen vozy BMW?",
    a: "Ano — BMW je naše specializace. Díky tomu známe motory, elektroniku i slabá místa jednotlivých řad a nestrácíme čas obecnými postupy.",
  },
  {
    q: "Potřebuji se objednat předem?",
    a: "Ano. Objednávka telefonem nebo formulářem nám umožní připravit zvedák, díly i čas, který vaše auto skutečně potřebuje.",
  },
  {
    q: "Máte originální diagnostiku BMW?",
    a: "Máme. Diagnostika je u moderních BMW začátek každé rozumné opravy — bez ní se jen hádá.",
  },
  {
    q: "Děláte i mytí, interiér a pneuservis?",
    a: "Ano. Kromě mechaniky nabízíme ruční mytí, čištění interiéru, leštění karoserie a výměnu pneu.",
  },
  {
    q: "Mohu přijet v sobotu?",
    a: "Sobota je možná po telefonické dohodě. V týdnu máme otevřeno pondělí až pátek od 9:00 do 17:00.",
  },
  {
    q: "Jak vás v Jablonci najdu?",
    a: "Sídlíme na adrese Jungmannova 8. Vjezd je z ulice Smetanova, naproti domu Smetanova 15. Když si nebudete jistí, zavolejte — navedeme vás.",
  },
] as const;

export const GALLERY = [
  { src: "/images/hero.jpg", alt: "Vůz BMW v dílně MAGNET po setmění", wide: true },
  { src: "/images/diagnostics.jpg", alt: "Originální diagnostika v provozu", wide: false },
  { src: "/images/engine.jpg", alt: "Motorový prostor po odborné práci", wide: false },
  { src: "/images/workshop.jpg", alt: "Interiér dílny MAGNET BMW", wide: true },
  { src: "/images/detailing.jpg", alt: "Ruční mytí a péče o lak", wide: false },
  { src: "/images/interior.jpg", alt: "Péče o interiér", wide: false },
] as const;

export const SERIES = [
  "Řada 1–8",
  "X1–X7",
  "M",
  "i",
  "Z4",
  "E46",
  "E90",
  "F10",
  "F30",
  "G20",
  "G30",
] as const;

export function fullAddress() {
  return `${SITE.address.line}, ${SITE.address.zip} ${SITE.address.city}`;
}

export function telHref() {
  return `tel:${SITE.phone}`;
}

export function smsHref(body: string) {
  return `sms:${SITE.phone}?body=${encodeURIComponent(body)}`;
}
