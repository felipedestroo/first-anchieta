import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "First Like a Girl",
  description:
    "Um movimento nas redes sociais para encorajar meninas e mulheres em STEM e FIRST. Ao apresentar as muitas mulheres incríveis da FIRST e suas histórias, as meninas podem encontrar modelos com quem se identificam e que as inspiram.",
  generator: "Next.js, React, Tailwind, Node, Vercel, Google Fonts",
  metadataBase: new URL("https://firstgirlvolunteer.vercel.app"),
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://firstgirlvolunteer.vercel.app",
    title: "First Like a Girl",
    description:
      "Um movimento nas redes sociais para encorajar meninas e mulheres em STEM e FIRST. Ao apresentar as muitas mulheres incríveis da FIRST e suas histórias, as meninas podem encontrar modelos com quem se identificam e que as inspiram.",
    siteName: "First Like a Girl",
    images: [
      {
        url: "/preview.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="h-full">
      <body className={`${inter.variable} h-full flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
