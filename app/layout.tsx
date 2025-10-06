import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import I18nProvider from "./components/I18nProvider";
import Script from "next/script";
import { detectBrowserLanguage } from "./utils/languageDetector";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CarGameOnline",
  description:
    "Play CarGameOnline, the free online racing car game. Thrilling races, spectacular drifts and multiplayer competition. Play now!",
  keywords:
    "racing game, car game, automobile racing, free game, online game, drift, multiplayer, 3D car game",
  authors: [{ name: "CarGameOnline" }],
  creator: "CarGameOnline",
  publisher: "CarGameOnline",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cargameonline.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "CarGameOnline ",
    description:
      "Play CarGameOnline, the free online racing car game. Thrilling races, spectacular drifts and multiplayer competition.",
    url: "https://cargameonline.com",
    siteName: "CarGameOnline",
    images: [
      {
        url: "/game/base/banner.jpg",
        width: 1200,
        height: 630,
        alt: "CarGameOnline - Racing Car Game",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CarGameOnline ",
    description:
      "Play CarGameOnline, the free online racing car game. Thrilling races, spectacular drifts and multiplayer competition.",
    images: ["/game/base/banner.jpg"],
    creator: "@cargameonline",
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
    google: "Fv4LDBJMxnFJrko37PJLc6lmkCvwDPhe6f_G-ZkxvPo", // Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = detectBrowserLanguage().language;

  return (
    <html lang={lang}>
      <head>
        <meta name="google-site-verification" content="Fv4LDBJMxnFJrko37PJLc6lmkCvwDPhe6f_G-ZkxvPo" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ✅ Google Analytics */}
        <Script
           src="https://www.googletagmanager.com/gtag/js?id=G-ZNELNXZ53K"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-VYJ53LHQTQ');

          `}
        </Script>

        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
