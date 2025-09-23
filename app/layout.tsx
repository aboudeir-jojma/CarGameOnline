import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import I18nProvider from "./components/I18nProvider";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CarGameOnline - Free Online Racing Car Game",
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
  openGraph: {
    title: "CarGameOnline - Free Online Racing Car Game",
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
    title: "CarGameOnline - Free Online Racing Car Game",
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
    google: "your-google-site-verification-code", // Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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

          gtag('config', 'G-ZNELNXZ53K');

          `}
        </Script>

        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
