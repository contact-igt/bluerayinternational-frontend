import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ChatProvider } from "@/context/ChatContext";
import ChatWidget from "@/components/chat/ChatWidget";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  variable: "--font-brand",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Blueray International | Engineering Quality & NDT Training",
  description: "Specialized training in NDT, QA/QC, and Safety since 2009. Empowering careers in Marine, Oil & Gas, and Offshore sectors.",
  icons: {
    icon: [
      {
        url: "/assets/BLUERAY Logo Blue.png",
        sizes: "any",
      }
    ],
    apple: "/assets/BLUERAY Logo Blue.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${openSans.variable} font-sans antialiased bg-gray-50 text-slate-800 min-h-screen flex flex-col`}
      >
        <ChatProvider>
          <Navbar />
          {children}
          <ChatWidget />
          <Footer />
        </ChatProvider>
      </body>
    </html>
  );
}



