import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

// Importing the font and setting the variable to use globally
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-space-grotesk',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore the portfolio of a frontend wizard crafting smooth, fast, and beautiful web experiences with React and Three.js."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
)}