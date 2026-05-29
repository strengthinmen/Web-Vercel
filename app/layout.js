import "./globals.css";

export const metadata = {
  // ── Core ──────────────────────────────────────────────────────────────────
  title: {
    default: "StrengthInMen | Rebuilding Life After Divorce for Men",
    template: "%s | StrengthInMen",
  },
  description:
    "StrengthInMen helps men navigate isolation, rebuild confidence, and find purpose after divorce. Daily structure, mood tracking, guided journaling, and a 21-day mental reset.",

  // ── Canonical ─────────────────────────────────────────────────────────────
  // Replace with your actual domain
  metadataBase: new URL("https://www.strengthinmen.com"),
  alternates: {
    canonical: "/",
  },

  // ── Open Graph (Facebook, LinkedIn, iMessage previews) ────────────────────
  openGraph: {
    title: "StrengthInMen | Rebuilding Life After Divorce for Men",
    description:
      "Divorce. Burnout. Feeling lost. StrengthInMen gives men structure, momentum, and a place to start again with purpose.",
    url: "https://www.strengthinmen.com",
    siteName: "StrengthInMen",
    images: [
      {
        url: "/og-image.png", // Create a 1200×630px image and drop it in /public
        width: 1200,
        height: 630,
        alt: "StrengthInMen – Rebuilding life after divorce",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ── Twitter / X Card ──────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "StrengthInMen | Rebuilding Life After Divorce for Men",
    description:
      "Daily structure, mood tracking, and guided journaling to help men rebuild after divorce.",
    images: ["/og-image.png"],
    // creator: "@yourhandle", // Uncomment and add if you have a Twitter/X account
  },

  // ── Indexing ──────────────────────────────────────────────────────────────
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

  // ── Favicon / App icons ───────────────────────────────────────────────────
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    // apple: "/apple-touch-icon.png", // Add a 180×180px PNG to /public if you have one
  },

  // ── Misc ──────────────────────────────────────────────────────────────────
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

// ── JSON-LD Structured Data (helps Google understand your site) ──────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "StrengthInMen",
  url: "https://www.strengthinmen.com",
  description:
    "StrengthInMen helps men rebuild their lives after divorce through daily structure, mood tracking, guided journaling, and a 21-day mental reset program.",
  sameAs: [
    // Add your actual social profile URLs here
    // "https://www.tiktok.com/@strengthinmen",
  ],
  offers: {
    "@type": "Offer",
    name: "21-Day Men's Mental Reset",
    url: "https://strengthinmen.gumroad.com/l/21-DayMenMentalReset",
    description:
      "21 days of structure, clarity, and momentum for men rebuilding after divorce.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* JSON-LD injected into <head> via a script tag */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
