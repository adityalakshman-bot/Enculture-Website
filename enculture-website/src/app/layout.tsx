import type { Metadata } from "next";
import { Outfit, Spline_Sans } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const splineSans = Spline_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-spline-sans",
  display: "swap",
});

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX";

export const metadata: Metadata = {
  metadataBase: new URL("https://enculture.ai"),
  title: {
    template: "%s",
    default: "Culture Intelligence Platform | Enculture",
  },
  description:
    "Enculture is the culture intelligence platform that turns employee signal into board-ready insights and closed action loops. 700+ organizations. 15 countries.",
  openGraph: {
    type: "website",
    siteName: "Enculture",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Enculture",
  url: "https://enculture.ai",
  description: "Culture intelligence platform",
  sameAs: ["https://linkedin.com/company/enculture-ai"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${splineSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
