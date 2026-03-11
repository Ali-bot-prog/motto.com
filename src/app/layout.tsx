import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mottounye.com"),
  title: {
    default: "Kahve Ateşi | Ünye'nin En İyi Kahvecisi",
    template: "%s | Kahve Ateşi Ünye",
  },
  description:
    "Ünye'nin kalbinde, Sahil Yolu üzerinde, özenle demlenen kahvenin ve sıcak atmosferin buluştuğu nokta. Espresso, filtre kahve, Türk kahvesi ve daha fazlası.",
  keywords: [
    "Ünye kahve",
    "Ünye kafe",
    "Ünye kahveci",
    "Kahve Ateşi",
    "Motto Ünye",
    "Ordu kafe",
    "Ünye gezilecek yerler",
    "Ünye restorant",
    "Ünye sahil kafe",
    "specialty coffee Ünye",
    "Çamurlu kafe",
    "Ünye brunch",
    "Ünye sabah kahvaltısı",
    "Ünye Ordu",
  ],
  authors: [{ name: "Kahve Ateşi" }],
  creator: "Kahve Ateşi",
  publisher: "Kahve Ateşi",
  alternates: {
    canonical: "https://www.mottounye.com",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.mottounye.com",
    siteName: "Kahve Ateşi",
    title: "Kahve Ateşi | Ünye'nin En İyi Kahvecisi",
    description:
      "Ünye'nin kalbinde, Sahil Yolu üzerinde, özenle demlenen kahvenin ve sıcak atmosferin buluştuğu nokta.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kahve Ateşi — Ünye",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kahve Ateşi | Ünye'nin En İyi Kahvecisi",
    description:
      "Ünye'nin kalbinde, Sahil Yolu üzerinde, özenle demlenen kahvenin ve sıcak atmosferin buluştuğu nokta.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* Local Business Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CafeOrCoffeeShop",
              name: "Kahve Ateşi",
              alternateName: "Motto Ünye",
              description:
                "Ünye'nin kalbinde, Sahil Yolu üzerinde, özenle demlenen kahvenin ve sıcak atmosferin buluştuğu nokta.",
              url: "https://www.mottounye.com",
              telephone: "+90-452-333-61-11",
              email: "info@mottounye.com",
              image: "https://www.mottounye.com/og-image.png",
              logo: "https://www.mottounye.com/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Çamurlu, Devlet Sahil Yolu No:32",
                addressLocality: "Ünye",
                addressRegion: "Ordu",
                postalCode: "52300",
                addressCountry: "TR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 41.1337,
                longitude: 36.7628,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "07:30",
                  closes: "01:00",
                },
              ],
              servesCuisine: ["Coffee", "Specialty Coffee", "Turkish Coffee"],
              priceRange: "₺₺",
              sameAs: ["https://www.instagram.com/unyemotto"],
              currenciesAccepted: "TRY",
              paymentAccepted: "Cash, Credit Card",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
