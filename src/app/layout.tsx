import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "Sylesh | Cybersecurity Portfolio",
    template: "%s | Sylesh",
  },
  description:
    "Portfolio of Sylesh Sathish Kumar, a Cybersecurity student focused on secure systems, networking, and security operations.",
  keywords: [
    "Cybersecurity",
    "Ethical Hacking",
    "Network Security",
    "Cloud Security",
    "Security Operations",
    "Sylesh Sathish Kumar",
    "InfoSec",
  ],
  authors: [{ name: "Sylesh Sathish Kumar" }],
  creator: "Sylesh Sathish Kumar",

  openGraph: {
    title: "Sylesh | Cybersecurity Portfolio",
    description:
      "Cybersecurity portfolio of Sylesh Sathish Kumar, showcasing skills in security operations, networking, and secure system design.",
    url: "/",
    siteName: "Sylesh Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sylesh Sathish Kumar - Cybersecurity Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sylesh | Cybersecurity Portfolio",
    description:
      "Cybersecurity portfolio of Sylesh Sathish Kumar",
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sylesh Sathish Kumar",
    jobTitle: "Cybersecurity Student",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    sameAs: [
      "https://github.com/onlyuuu",
      "https://www.linkedin.com/in/syleshsathishkumar/",
    ],
    description:
      "Cybersecurity student focused on secure systems, networking fundamentals, and security operations.",
    image: `${
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    }/og-image.png`,
    knowsAbout: [
      "Cybersecurity",
      "Network Security",
      "Ethical Hacking",
      "Security Operations",
      "Cloud Security",
      "SQL",
    ],
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {children}
      </body>
    </html>
  );
}
