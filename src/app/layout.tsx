import type { Metadata } from "next";
import {ReactNode} from 'react'
import { Inter } from "next/font/google";
import '../styles/globals.css'
import { Header } from "@/components/widgets/header";
import { CoverParticles } from "@/components/widgets/particles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miguel Castillo",
  description: "Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black ${inter.className}`}>
      <CoverParticles/>
      <Header/>
        {children}
      </body>
    </html>
  );
}
