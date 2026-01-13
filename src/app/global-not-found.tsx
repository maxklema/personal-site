'use client'

import './globals.css'
import { Linkedin, Github } from 'lucide-react';
import { useEffect } from 'react';

export default function GlobalNotFound() {

  useEffect(() => {
      const nav: any = document.getElementById('site-nav');
      const as = nav.querySelectorAll('a');
      const footerNav: any = document.getElementById("footer-nav");
      const footeras = footerNav.querySelectorAll('a');
      let isNavActive = false;
      let isFooterNavActive = false;
  
      as.forEach((a: any) => {
        a.addEventListener('mouseenter', function () {
          const aRect = a.getBoundingClientRect();
          const navRect = nav.getBoundingClientRect();
          const offsetX = aRect.left - navRect.left;
          if (isNavActive) {
            nav.style.setProperty('--left-delay', '0.3s');
            nav.style.setProperty('--width-delay', '0.3s');
          } else {
            nav.style.setProperty('--left-delay', '0s');
            nav.style.setProperty('--width-delay', '0s');
            isNavActive = true;
          }
  
          nav.style.setProperty('--indicator-width', aRect.width + 'px');
          nav.style.setProperty('--indicator-x', offsetX + 'px');
          nav.style.setProperty('--opacity', '1');
        });
      });
  
      footeras.forEach((a: any) => {
        a.addEventListener('mouseenter', function () {
  
          const aRect = a.getBoundingClientRect();
          const footerNavOffset = footerNav.getBoundingClientRect();
          const offsetX = aRect.left - footerNavOffset.left;
  
          if (isFooterNavActive) {
            footerNav.style.setProperty('--footer-width-delay', '0.3s');
            footerNav.style.setProperty('--footer-left-delay', '0.3s');
          } else {
            footerNav.style.setProperty('--footer-width-delay', '0s');
            footerNav.style.setProperty('--footer-left-delay', '0s');
            isFooterNavActive = true;
          }
  
          footerNav.style.setProperty('--footer-indicator-width', aRect.width + 'px');
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
      <title>404 | Maxwell Klema</title>
      <meta name="description" content="Maxwell Klema personal website." />
      <body>
        <div className={'site-main-frame'}>
          
          {/* Header Navigation */}
          <div className={'nav-bar'}>
            <div className={'site-nav'} id="site-nav">
              <a href="/">about</a>
              <a href="/writings">writings</a>
              <a href="/maxklemaresume2025.pdf" target="_blank">resume</a>
            </div>
            <div className={'external-nav'}>
              <a href="https://www.aedin.com/in/maxwell-klema/" id={'aedinIcon'} target="_blank">
                <Linkedin size={22} strokeWidth={1.3}/>
              </a>
              <a href="https://github.com/maxklema" id={'githubIcon'} target="_blank">
                <Github size={22} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* 404 Content */}
          <div className="errorPageMainFrame">
            <img src="/error.png" alt="Error" className="errorImg" />
            <h2 className="errorHeading">Sorry, the page you are looking for does not exist.</h2>
            <p className="paragraphError">Go back to</p>
            <a className="hyperLink" href="/">home</a>
          </div>

          {/* Footer */}
          <div className={'footer'}>
            <div className={'footer-nav'} id="footer-nav">
              <a href="/">about</a>
              <a href="/writings">writings</a>
              <a href="/maxklemaresume2025.pdf">resume</a>
              <a href="https://www.aedin.com/in/maxwell-klema/" target="_blank">aedin</a>
              <a href="https://www.github.com/maxklema" target="_blank">github</a>
            </div>
            <p>© 2026 Maxwell Klema</p>
          </div>
        </div>
      </body>
    </html>
  );
}
