/**
 * Brand & contact constants
 * Single source of truth — update here, reflects everywhere.
 */
export const BRAND = {
  name: "Kahve Ateşi",
  tagline: "Ateşin Kokusu, Kahvenin Ruhu",
  domain: "https://www.mottounye.com",
  instagram: "https://www.instagram.com/unyemotto",
  instagramHandle: "@unyemotto",
  phone: "(0452) 333 61 11",
  phoneHref: "tel:+904523336111",
  email: "info@mottounye.com",
  address: {
    street: "Çamurlu, Devlet Sahil Yolu No:32",
    city: "Ünye",
    region: "Ordu",
    postalCode: "52300",
    country: "TR",
    full: "Çamurlu, Devlet Sahil Yolu No:32, 52300 Ünye / Ordu",
    mapsUrl:
      "https://maps.google.com/?q=Çamurlu+Devlet+Sahil+Yolu+No:32+Ünye+Ordu",
  },
  geo: {
    latitude: 41.1337,
    longitude: 36.7628,
  },
} as const;

export const HOURS = [
  { day: "Pazartesi", time: "07:30 – 01:00" },
  { day: "Salı", time: "07:30 – 01:00" },
  { day: "Çarşamba", time: "07:30 – 01:00" },
  { day: "Perşembe", time: "07:30 – 01:00" },
  { day: "Cuma", time: "07:30 – 01:00" },
  { day: "Cumartesi", time: "07:30 – 01:00" },
  { day: "Pazar", time: "07:30 – 01:00" },
] as const;

export const NAV_LINKS = [
  { label: "Hikayemiz", href: "#hikayemiz" },
  { label: "Kahvelerimiz", href: "#kahvelerimiz" },
  { label: "Galeri", href: "#galeri" },
  { label: "İletişim", href: "#iletisim" },
] as const;
