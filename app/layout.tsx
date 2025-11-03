import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "English Young Learners Conference – Braga 2025",
  description: "Inspiring Young Minds through English Learning | March 15–16, 2025 | Braga, Portugal",
  keywords: ["English learning", "young learners", "conference", "Braga", "IH Braga", "education"],
  authors: [{ name: "IH Braga" }],
  openGraph: {
    title: "English Young Learners Conference – Braga 2025",
    description: "Inspiring Young Minds through English Learning",
    url: "https://young-learners-conference.vercel.app",
    siteName: "Young Learners Conference",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Young Learners Conference Braga 2025",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "English Young Learners Conference – Braga 2025",
    description: "Inspiring Young Minds through English Learning",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}