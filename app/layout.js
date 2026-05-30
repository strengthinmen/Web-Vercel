import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: {
    default: "StrengthInMen | Rebuilding Life After Divorce for Men",
    template: "%s | StrengthInMen",
  },
  description:
    "StrengthInMen helps men navigate isolation, rebuild confidence, and find purpose after divorce. Daily structure, mood tracking, guided journaling, and a 21-day mental reset.",
  metadataBase: new URL("https://www.strengthinmen.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "StrengthInMen | Rebuilding Life After Divorce for Men",
    description:
      "Divorce. Burnout. Feeling lost. StrengthInMen gives men structure, momentum, and a place to start again with purpose.",
    url: "https://www.strengthinmen.com",
    siteName: "StrengthInMen",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "StrengthInMen – Rebuilding life after divorce",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StrengthInMen | Rebuilding Life After Divorce for Men",
    description:
      "Daily structure, mood tracking, and guided journaling to help men rebuild after divorce.",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  keywords: [
    "men rebuilding after divorce",
    "divorce recovery for men",
    "men mental health after divorce",
    "feeling lost after divorce men",
    "men isolation divorce",
    "rebuild life after divorce",
    "21 day mental reset men",
    "men self improvement divorce",
    "divorce support for fathers",
    "strengthinmen app",
  ],
  authors: [{ name: "StrengthInMen" }],
  creator: "StrengthInMen",
  category: "mental health",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "StrengthInMen",
  url: "https://www.strengthinmen.com",
  description:
    "StrengthInMen helps men rebuild their lives after divorce through daily structure, mood tracking, guided journaling, and a 21-day mental reset program.",
  sameAs: [
    "https://www.tiktok.com/@strength.in.men7",
  ],
  offers: {
    "@type": "Offer",
    name: "21-Day Men's Mental Reset",
    url: "https://www.strengthinmen.com/reset",
    description:
      "21 days of structure, clarity, and momentum for men rebuilding after divorce.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L719X47Y32"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L719X47Y32');
          `}
        </Script>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}