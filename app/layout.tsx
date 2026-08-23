import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { SITE } from "@/config/site";
import { FONT_AWESOME_CSS_HREF } from "@/config/assets";

export const metadata: Metadata = {
  title: SITE.name,
  description: SITE.description,
  keywords: SITE.keywords,
  authors: [{ name: SITE.authorName }],
  openGraph: {
    title: SITE.og.title,
    url: SITE.url,
    description: SITE.og.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content={SITE.authorName} />
        <meta name="copyright" content={SITE.authorName} />
        <meta name="application-name" content={SITE.name} />
        <meta property="og:type" content={SITE.name} />
        <meta name="twitter:card" content={SITE.twitter.card} />
        <meta name="twitter:title" content={SITE.twitter.title} />
        <meta name="twitter:description" content={SITE.twitter.description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="stylesheet" href="/Content/libs/bootstrap/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="/Content/css/common.css" />
        <link rel="stylesheet" type="text/css" href="/Content/css/imc-2025.css" />
        <link rel="stylesheet" type="text/css" href="/Content/css/imc-shared.css" />
        <link
          rel="stylesheet"
          href={FONT_AWESOME_CSS_HREF}
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only sr-only-focusable"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 9999,
            background: "#01153e",
            color: "#fff",
            padding: "8px 16px",
          }}
        >
          Skip to main content
        </a>
        <Script src="/Content/libs/jquery/jquery-3.3.1.min.js" strategy="beforeInteractive" />
        <Script src="/Content/libs/bootstrap/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/Content/libs/typed/typed.min.js" strategy="afterInteractive" />
        <Script src="/Scripts/common.js" strategy="afterInteractive" />
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
