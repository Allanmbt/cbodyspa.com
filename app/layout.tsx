import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "CBODY - Outcall Massage Bangkok | Mobile Massage to Your Hotel",
  description: "Professional outcall massage service in Bangkok. We bring authentic Thai massage, oil massage, and wellness treatments directly to your hotel. 45-60 minutes arrival, English support, transparent pricing.",
  keywords: "outcall massage bangkok, mobile massage bangkok, home massage bangkok, hotel massage bangkok, thai massage outcall, bangkok massage service",
  authors: [{ name: "CBODY" }],
  creator: "CBODY",
  publisher: "CBODY",
  robots: "index, follow",
  openGraph: {
    title: "CBODY - Outcall Massage Bangkok | Mobile Massage to Your Hotel",
    description: "Professional outcall massage service in Bangkok. 45-60 minutes arrival, English support, transparent pricing.",
    url: "https://cbodyspa.com",
    siteName: "CBODY",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CBODY Outcall Massage Bangkok",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CBODY - Outcall Massage Bangkok | Mobile Massage to Your Hotel",
    description: "Professional outcall massage service in Bangkok. 45-60 minutes arrival, English support, transparent pricing.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://cbodyspa.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CBODY",
              "description": "Professional outcall massage service in Bangkok",
              "url": "https://cbodyspa.com",
              "logo": "https://cbodyspa.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+66-123-456-789",
                "contactType": "customer service",
                "availableLanguage": ["English", "Thai"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bangkok",
                "addressCountry": "Thailand"
              },
              "serviceArea": {
                "@type": "City",
                "name": "Bangkok"
              },
              "priceRange": "THB 700-1600"
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
