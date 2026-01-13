'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Linkedin, Github } from 'lucide-react';
import { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//root layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    const nav: any = document.getElementById('site-nav');
    const links = nav.querySelectorAll('a');
    const footerNav: any = document.getElementById("footer-nav");
    const footerLinks = footerNav.querySelectorAll('a');
    let isNavActive = false;
    let isFooterNavActive = false;

    links.forEach((link: any) => {
      link.addEventListener('mouseenter', function () {
        const linkRect = link.getBoundingClientRect();
        const navRect = nav.getBoundingClientRect();
        const offsetX = linkRect.left - navRect.left;
        if (isNavActive) {
          nav.style.setProperty('--left-delay', '0.3s');
          nav.style.setProperty('--width-delay', '0.3s');
        } else {
          nav.style.setProperty('--left-delay', '0s');
          nav.style.setProperty('--width-delay', '0s');
          isNavActive = true;
        }

        nav.style.setProperty('--indicator-width', linkRect.width + 'px');
        nav.style.setProperty('--indicator-x', offsetX + 'px');
        nav.style.setProperty('--opacity', '1');
      });
    });

    footerLinks.forEach((link: any) => {
      link.addEventListener('mouseenter', function () {

        const linkRect = link.getBoundingClientRect();
        const footerNavOffset = footerNav.getBoundingClientRect();
        const offsetX = linkRect.left - footerNavOffset.left;

        if (isFooterNavActive) {
          footerNav.style.setProperty('--footer-width-delay', '0.3s');
          footerNav.style.setProperty('--footer-left-delay', '0.3s');
        } else {
          footerNav.style.setProperty('--footer-width-delay', '0s');
          footerNav.style.setProperty('--footer-left-delay', '0s');
          isFooterNavActive = true;
        }

        footerNav.style.setProperty('--footer-indicator-width', linkRect.width + 'px');
        footerNav.style.setProperty('--footer-indicator-x', offsetX + 'px');
        footerNav.style.setProperty('--footer-opacity', '1');
      });
    });

    nav.addEventListener('mouseleave', function () {
      isNavActive = false;
      nav.style.setProperty('--left-delay', '0s');
      nav.style.setProperty('--width-delay', '0s');
      nav.style.setProperty('--opacity', '0');
    });

    footerNav.addEventListener('mouseleave', function () {
      isFooterNavActive = false;
      footerNav.style.setProperty('--footer-width-delay', '0s');
      footerNav.style.setProperty('--footer-left-delay', '0s');
      footerNav.style.setProperty('--footer-opacity', '0');
    });

  }, []);

  return (
    <html lang="en">
      <head>
        <title>Maxwell Klema</title>
        <meta name="description" content="Maxwell Klema personal website." />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
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
                <Linkedin size={22} strokeWidth={1.3} />
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
      </body>
    </html>
  );
}
