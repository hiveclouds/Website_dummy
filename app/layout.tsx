import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Indonesian Cancer Society | Bersama Melawan Kanker",
  description:
    "Yayasan Kanker Indonesia — Mendukung deteksi dini, pengobatan, dan kampanye kesadaran kanker payudara di seluruh Indonesia.",
  keywords: "kanker payudara, deteksi dini, fundraising, Indonesia Cancer Society",
  openGraph: {
    title: "Indonesian Cancer Society",
    description: "Bersama Melawan Kanker — Awareness, Education & Fundraising",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain antialiased">{children}</body>
    </html>
  );
}
