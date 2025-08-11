import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qhatu NFT - Andes Art Collectibles",
  description: "A NFT store for collectibles created by artists from the Andes. First collaboration with AgujaFilmica and their project 'Detras de la pantalla'",
  keywords: ["NFT", "Andes", "Art", "Collectibles", "Digital Art", "Blockchain"],
  authors: [{ name: "Qhatu NFT Team" }],
  openGraph: {
    title: "Qhatu NFT - Andes Art Collectibles",
    description: "Discover unique NFT collectibles from Andes artists",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="qhatu">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
