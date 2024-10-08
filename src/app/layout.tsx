import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopNavbar } from "@/components/pages/TopNavbar";
import Footer from "@/components/pages/Footer";
import { NextUIProvider } from "@nextui-org/react";
import { Providers } from "./providers";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Telemune",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="dark bg-black" >

      <body className={inter.className}>
        <Providers>
          <main className="dark text-foreground bg-background ">
            <TopNavbar />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
