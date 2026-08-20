import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Dancing_Script } from "next/font/google";
import Header from "@/components/ui/header/Header";
import Footer from "@/components/ui/footer/Footer";
import WhatsAppFloat from "@/components/ui/whatsapp/WhatsAppFloat";
import { CONTACT } from "@/lib/contact";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(CONTACT.site.url),
  title: {
    default: CONTACT.site.name,
    template: `%s | ${CONTACT.site.name}`,
  },
  description: CONTACT.site.description,
  keywords: CONTACT.site.keywords,
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: CONTACT.site.name,
    title: `${CONTACT.site.name} — ${CONTACT.site.tagline}`,
    description: CONTACT.site.description,
    images: [
      {
        url: "/starsLogo.png",
        width: 1200,
        height: 630,
        alt: CONTACT.site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${CONTACT.site.name} — ${CONTACT.site.tagline}`,
    description: CONTACT.site.description,
    images: ["/starsLogo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow-condensed",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-dancing",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`h-full antialiased ${barlow.variable} ${barlowCondensed.variable} ${dancingScript.variable}`}
    >
      <body className="min-h-full flex bg-black flex-col">
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
