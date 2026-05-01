import type { Metadata } from "next";
import { Raleway, Open_Sans } from "next/font/google";
import "./globals.css";
import ChatWidget from "./components/ChatWidget";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "PrimeLane Logistics — Australia's Freight Partner",
  description:
    "PrimeLane Logistics specialises in container shipping from Australia to Dubai, vehicle transport, and industrial freight. FCL, LCL, air freight, and DG-certified transport.",
  openGraph: {
    title: "PrimeLane Logistics",
    description:
      "Container shipping, vehicle transport, and industrial freight. Australia's direct corridor to Dubai, UAE.",
    url: "https://primelanelogistics.com.au",
    siteName: "PrimeLane Logistics",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <Navbar />
        {children}
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
