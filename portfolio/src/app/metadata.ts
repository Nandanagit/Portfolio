import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nandana P | Portfolio",
  description: "Minimalist portfolio of Nandana P, Associate Software Engineer.",
  keywords: [
    "Nandana P",
    "Portfolio",
    "Software Engineer",
    "Next.js",
    "React",
    "Tailwind CSS"
  ],
  authors: [{ name: "Nandana P" }],
  openGraph: {
    title: "Nandana P | Portfolio",
    description: "Minimalist portfolio of Nandana P, Associate Software Engineer.",
    type: "website",
    url: "https://your-portfolio-url.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nandana P Portfolio"
      }
    ]
  },
  icons: {
    icon: "/favicon.ico"
  },
  manifest: "/manifest.json"
};
