import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Dancing_Script } from "next/font/google";
import Header from "@/components/ui/header/Header";
import Footer from "@/components/ui/footer/Footer";
import WhatsAppFloat from "@/components/ui/whatsapp/WhatsAppFloat";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://starsgym.com.ar"),
  title: {
    default: "Stars Gym",
    template: "%s | Stars Gym",
  },
  description:
    "Gimnasio de musculación en Alderetes, Tucumán. Entrenamientos guiados, planes flexibles y una comunidad que te empuja a dar un paso más cada día.",
  keywords: [
    "gimnasio",
    "musculación",
    "Alderetes",
    "Tucumán",
    "entrenamiento",
    "fitness",
    "Stars Gym",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Stars Gym",
    title: "Stars Gym — Constancia, esfuerzo y comunidad",
    description:
      "Gimnasio de musculación en Alderetes, Tucumán. Entrenamientos guiados, planes flexibles y una comunidad que te empuja a dar un paso más cada día.",
    images: [
      {
        url: "/starsLogo.png",
        width: 1200,
        height: 630,
        alt: "Stars Gym",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stars Gym — Constancia, esfuerzo y comunidad",
    description:
      "Gimnasio de musculación en Alderetes, Tucumán. Entrenamientos guiados, planes flexibles y una comunidad que te empuja a dar un paso más cada día.",
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
