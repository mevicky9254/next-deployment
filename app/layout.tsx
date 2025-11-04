
// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/ui/TopBar";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zovinity - Your Digital Partner",
  description: "Zovinity is a leading web designing and digital marketing company in India, empowering businesses with innovative web and mobile solutions to drive digital growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Headers are fixed and outside the main scrollable content */}
        <header>
            <TopBar />
            <Navbar />
        </header>

        {/* NO PADDING HERE. This allows the page content to start at the very top. */}
        <main>
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}