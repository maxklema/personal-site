import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Linkedin, Github } from 'lucide-react';

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
          
          {/* Header Navigation */}

          <div className={'nav-bar'}>
            <div className={'site-nav'} id="site-nav">
              <Link href="/">about</Link>
              <Link href="/writings">writings</Link>
              <Link href="/maxklemaresume2025.pdf" target="_blank">resume</Link>
            </div>
            <div className={'external-nav'}>
              <Link href="https://www.linkedin.com/in/maxwell-klema/" id={'linkedinIcon'} target="_blank">
                <Linkedin size={22} strokeWidth={1.3}/>
              </Link>
              <Link href="https://github.com/maxklema" id={'githubIcon'} target="_blank">
                <Github size={22} strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          {/* Page Content */}

          {children}

          {/* Footer */}
          <div className={'footer'}>
            <div className={'footer-nav'} id="footer-nav">
              <Link href="/">about</Link>
              <Link href="/writings">writings</Link>
              <Link href="/maxklemaresume2025.pdf">resume</Link>
              <Link href="https://www.linkedin.com/in/maxwell-klema/" target="_blank">linkedin</Link>
              <Link href="https://www.github.com/maxklema" target="_blank">github</Link>
            </div>
            <p>© 2026 Maxwell Klema</p>
          </div>
        </div>
        <script src="./scripts/nav-animation.js"></script>
        <script src="./scripts/footer-animation.js"></script>
      </body>
    </html>
  );
}
