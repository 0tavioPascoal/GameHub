import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//components
import { Header } from "@/Components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GamesHub - Descubra jogos Incriveis",
  description: "Mais de 10 mil jogos separados e organizados...",
  keywords: ['Jogo', 'Games','Steam'],
  openGraph: {
    images: [`${process.env.PROJECT_URL}`]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
