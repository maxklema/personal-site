import Link from "next/link";
import styles from "./page.module.css";
import ExperienceCard from "@/components/experience card/card";

export default function Page() {
  return (
    <div className={styles.aboutPageMainframe}>

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
        <script src="/scripts/terminal-animation.js"></script>
      </div>
    </div>
  );
}
