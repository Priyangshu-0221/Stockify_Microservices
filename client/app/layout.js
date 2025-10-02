import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,

} from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import "remixicon/fonts/remixicon.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Stockify",
  description:
    "A modern, sleek stock market dashboard and trading platform built with Next.js, Tailwind CSS, and Clerk authentication.",
};

export default function RootLayout({ children }) {
  return (
<ClerkProvider       
appearance={{
        baseTheme: dark,
      }}>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>

          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
      </ClerkProvider>

  );
}
