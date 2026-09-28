import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { BRAND } from "@/lib/data";

const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: {
    default: "Utkarsh Charitable Trust (Regd.) Moradabad | Empowering Lives, Educating Children",
    template: "%s | Utkarsh Charitable Trust",
  },
  description:
    "Utkarsh Charitable Trust (Regd.), Moradabad — child welfare, road safety, education, women empowerment, health camps & Hanumant Vridh Seva Dham old-age home. Estd. 24 May 2022. Donate & volunteer.",
  keywords: ["NGO Moradabad", "Utkarsh Charitable Trust", "child welfare NGO", "old age home Moradabad", "road safety", "donate India", "volunteer NGO"],
  authors: [{ name: "Utkarsh Charitable Trust" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: BRAND.name,
    title: "Utkarsh Charitable Trust — Empowering Lives, Educating Children",
    description: "Premium NGO in Moradabad: child welfare, road safety, education, women empowerment, elder seva & Vridh Seva Dham.",
    images: [{ url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Utkarsh Charitable Trust", description: BRAND.tagline },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: BRAND.name,
              slogan: BRAND.tagline,
              foundingDate: "2022-05-24",
              address: { "@type": "PostalAddress", addressLocality: "Moradabad", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
              email: BRAND.email,
              telephone: BRAND.phone,
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 antialiased">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingButtons />
        </Providers>
      </body>
    </html>
  );
}
