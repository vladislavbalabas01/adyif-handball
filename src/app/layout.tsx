import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const GeistFont = Geist({
  subsets: ["latin", "cyrillic"],
  variable: "--geist-font",
  display: "swap",
});

export const metadata: Metadata = {
  title: "АГУ-Адыиф - официальный сайт",
  description: "Официальный сайт женской гандбольной команды АГУ-Адыиф",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${GeistFont.className} antialiased`}>
        <div className="flex min-h-screen flex-col justify-between select-none pb-12 sm:pb-16 md:pb-0 bg-slate-950 overflow-hidden">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
