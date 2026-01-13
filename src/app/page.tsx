'use client'

import Link from "next/link";
import styles from "./page.module.css";
import ExperienceCard from "@/components/experience card/card";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const steps: [string, number][] = [
      ["Checkout code…", 400],
      ["Setup Node.js 20…", 1000],
      ["Install deps (pnpm)…", 3000],
      ["Lint…", 1800],
      ["Lint passed (32 files)", 300],
      ["Test…", 2500],
      ["128 tests passed • coverage 92%", 300],
      ["Build…", 2500],
      ["Build complete (12.4 MB)", 300],
      ["Containerize…", 1500],
      ["Image pushed ghcr.io/maxklema/site:427", 300],
      ["Deploy to Proxmox…", 1200],
      ["Deployed • 2 pods • 35ms p95", 300],
      ["Pipeline succeeded in 15s", 200]
    ];

    const logEl = document.getElementById("log");
    const rerun = document.getElementById("rerun");
    const ciInfo = document.getElementById("ciInfo");
    let buildNo = 1;
    
    let currentTimeouts: NodeJS.Timeout[] = [];
    
    function clearAllTimeouts() {
      currentTimeouts.forEach(timeoutId => clearTimeout(timeoutId));
      currentTimeouts = [];
    }
    
    function getTime() {
      const d = new Date();
      const pad = (n: number) => String(n).padStart(2, '0');
      let seconds = pad(d.getSeconds());
      let minutes = pad(d.getMinutes());
      let hours = pad(d.getHours());
      return `[${hours}:${minutes}:${seconds}] `;
    }

    function run() {
      clearAllTimeouts();
      let i = 0;
      if (ciInfo) ciInfo.textContent = `mklema-ci • build #${buildNo}`;
      if (logEl) logEl.textContent = "";

      function displayStep() {
        i++;
        if (i >= steps.length) {
          const restartTimeoutId = setTimeout(() => {
            buildNo++;
            run();
          }, 3000);
          currentTimeouts.push(restartTimeoutId);
          return;
        }

        if (logEl) {
          logEl.textContent += getTime() + steps[i][0] + "\n";
          logEl.scrollTop = logEl.scrollHeight;
        }
        
        const timeoutId = setTimeout(displayStep, steps[i][1]);
        currentTimeouts.push(timeoutId);
      }

      if (logEl) {
        logEl.textContent = getTime() + steps[i][0] + "\n";
        logEl.scrollTop = logEl.scrollHeight;
      }
      
      const nextTimeoutId = setTimeout(displayStep, steps[i][1]);
      currentTimeouts.push(nextTimeoutId);
    }

    if (rerun) {
      const handleRerun = () => run();
      rerun.addEventListener("click", handleRerun);
      
      // clear all timers and remove event listener for component unmounting
      const cleanup = () => {
        clearAllTimeouts();
        rerun.removeEventListener("click", handleRerun);
      };

      const initialTimeoutId = setTimeout(run, 3300);
      currentTimeouts.push(initialTimeoutId);

      return cleanup;
    }
  }, []); 

  return (
    <div className={styles.aboutPageMainframe}>
      <title>Home | Maxwell Klema</title>

      {/* BIO */}
      <div className={styles.bioFrame}>
        <div className={styles.bio}>
          <h1 id={styles.nameHeader}>Maxwell Klema</h1>
          <div className={styles.subBio}>
            <h5 id={styles.introHeader}>CS @ Purdue Fort Wayne (PFW)</h5>
            <p>he/him</p>
          </div>
          <br />
          <p className={styles.introPar}>Hello! I’m a developer, lifelong learner, and vim enjoyer studying Computer Science. I’m currently a junior and graduate in May 2027.</p>
          <br />
          <p className={styles.introPar}>I enjoy building reliable, impactful software and learning how systems scale. My current interests include DevSecOps, CI/CD automation, cloud infrastructure, and distributed systems.</p>
          <br />
          <p className={styles.introPar}>Feel free to contact me at</p>
          <a href="mailto:klemmr02@purdue.edu" className={styles.introPar} id={styles.hyperlink}>klemmr02@purdue.edu</a>
        </div>
        <div className={styles.portrait}>
          <img src="/max.png" alt="Max Klema Portrait 2025" />
          <p>taken: 01/6/26</p>
        </div>
      </div>


      {/* EXPERIENCE */}
      <div className={styles.experienceFrame}>
        <h3 id={styles.experienceHeader}>where I have been</h3>
        <ExperienceCard
          id="mie-2025"
          imgSrc="./MIE.svg"
          imgAlt="MIE Logo SVG"
          companyName="Medical Informatics Engineering"
          companyURL="https://mieweb.org/"
          positionTitle="Software Developer Intern"
          positionDate="Summer 2025"
          experienceDesc={<p>Co-led the design and deployment of a company-wide, open-source{" "}
            <Link href="https://opensource.mieweb.org/" target="_blank" id={styles.hyperlink}>
              Proxmox Cluster
            </Link>{" "}
            with custom CI/CD tools, such as{" "}
            <Link href="https://github.com/marketplace/actions/proxmox-launchpad" target="_blank" id={styles.hyperlink}>
              Proxmox LaunchPad
            </Link>. The cluster now supports 75+ active projects and 150+ containers organization-wide.</p>}
        />
        <ExperienceCard
          id="mie-2024"
          imgSrc="./MIE.svg"
          imgAlt="MIE Logo SVG"
          companyName="Medical Informatics Engineering"
          companyURL="https://mieweb.org/"
          positionTitle="Software Developer Intern"
          positionDate="Summer 2024"
          experienceDesc={<p>Built{" "}
            <Link href="https://www.npmjs.com/package/@maxklema/mie-api-tools" target="_blank" id={styles.hyperlink}>WebChart API Tools</Link>, including a <Link href="https://github.com/maxklema/mie-data-migration" target="_blank" id={styles.hyperlink}>CLI import/export workflow</Link> that reduced chart import times by an average of 90%.
            Additionally developed {" "}
            <Link href="https://github.com/maxklema/WebChart-Go" target="_blank" id={styles.hyperlink}>WebChart Go</Link>
            , a mobile companion app bringing native functionality to WebChart.
          </p>}
        />
        <ExperienceCard
          id="cc-2022"
          imgSrc="./CodeClouds.png"
          imgAlt="CodeClouds Logo SVG"
          companyName="CodeClouds"
          companyURL="https://www.codeclouds.com/"
          positionTitle="Web Development and Design Intern"
          positionDate="Summer & Fall 2022"
          experienceDesc={<p>Led web development, wireframing, and graphic design efforts for multiple websites,
            including the <Link href="https://ariseroanoke.org/" target="_blank" id={styles.hyperlink}>Arise Church site</Link>.
          </p>}
        />
      </div>

      {/* EDUCATION */}
      <div className={styles.educationFrame}>
        <h3 id={styles.experienceHeader}>where I study</h3>
        <ExperienceCard
          id="pfw-2027"
          imgSrc="./PFW.png"
          imgAlt="MIE Logo SVG"
          companyName="Purdue University - Fort Wayne"
          companyURL="https://www.pfw.edu/"
          positionTitle="B.S. in Computer Science"
          positionDate="Fall 2023 — Spring 2027"
          experienceDesc={<p>
            <Link href="https://www.pfw.edu/summit-scholars/chapman-scholars" target="_blank" id={styles.hyperlink}>Chapman Scholar (full-ride scholarship)</Link> and {" "}
            <Link href="https://www.pfw.edu/etcs/student-success-center" target="_blank" id={styles.hyperlink}>LEAD mentor</Link>.{" "}
            Currently creating PFW Nexus, an online mentoring and networking platform for students.
          </p>}
        />
      </div>

      {/* CI Terminal */}
      <div className={styles.terminalFrame}>
        <div className={styles.ciTerminal}>
          <div className={styles.ciTerminalUpperFrame}>
            <span id={styles.redTrafficLight}></span>
            <span id={styles.yellowTrafficLight}></span>
            <span id={styles.greenTrafficLight}></span>
            <strong id="ciInfo" style={{ marginLeft: '8px' }}></strong>
            <button id="rerun">run again</button>
          </div>
          <pre id="log"></pre>
        </div>
      </div>
    </div>
  );
}
