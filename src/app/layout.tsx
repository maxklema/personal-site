import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home | Max Klema",
  description: "...",
};

//root layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={'site-main-frame'}>
          <div className={'nav-bar'}>
            <div className={'site-nav'} id="site-nav">
              <Link href="/">about</Link>
              <Link href="/writing">writings</Link>
              <Link href="/resume">resume</Link>
            </div>
            <div className={'external-nav'}>
              <Link href="https://www.linkedin.com/in/maxwell-klema/" target="_blank">LinkedIn</Link>
              <Link href="https://github.com/" target="_blank">GitHub</Link>
            </div>
          </div>
          {children}
        </div>
        <script src="./scripts/nav-animation.js"></script>
      </body>
    </html>
  );
}
