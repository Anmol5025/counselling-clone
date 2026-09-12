import type { Metadata } from "next";
import { Cormorant_Garamond, Mulish, Caveat } from "next/font/google";
import "./globals.css";

const fontSerif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fontSans = Mulish({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const fontScript = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Clinical Psychologist in Santa Monica, CA",
  description: "Therapy in Santa Monica and online in California for high-achieving adults navigating anxiety, trauma, and burnout. Specialized in EMDR and CBT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontSerif.variable} ${fontScript.variable} font-sans antialiased bg-brand-bg text-brand-text`}
      >
        {children}
      </body>
    </html>
  );
}
