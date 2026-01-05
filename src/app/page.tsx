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
          <p>Hello! I am a developer/learner/vim-enjoyer studying Computer Science. I am currently a junior and will graduate in May 2027.</p>
          <br />
          <p>I am passionate about building impactful and reliable solutions. My current area of study is DevSecOps, CI/CD automation, cloud infrastructure, and distributed systems.</p>
          <br />
          <p>Feel free to contact me at</p>
          <a href="mailto:klemmr02@purdue.edu" id={styles.hyperlink}>klemmr02@purdue.edu</a>
        </div>
        <div className={styles.portrait}>
          <img src="/max-portrait.jpeg" alt="Max Klema Portrait 2025" />
          <p>taken: 12/31/25</p>
        </div>
      </div>


      {/* EXPERIENCE */}
      <div className={styles.experienceFrame}>
        <h3 id={styles.experienceHeader}>where I have been</h3>
        <ExperienceCard
          imgSrc="./MIE.svg"
          imgAlt="MIE Logo SVG"
          companyName="Medical Informatics Engineering"
          positionTitle="Software Developer Intern"
          positionDate="Summer 2025"
          experienceDesc={<p>Co-spearheaded a company-wide open-source{" "}
            <Link href="https://opensource.mieweb.org/" target="_blank" id={styles.hyperlink}>
              Proxmox Cluster
            </Link>{" "}
            along with custom CI/CD tools, such as{" "}
            <Link href="https://github.com/marketplace/actions/proxmox-launchpad" target="_blank" id={styles.hyperlink}>
              Proxmox LaunchPad
            </Link>.</p>}
        />
        <br /><br />
        <ExperienceCard
          imgSrc="./MIE.svg"
          imgAlt="MIE Logo SVG"
          companyName="Medical Informatics Engineering"
          positionTitle="Software Developer Intern"
          positionDate="Summer 2024"
          experienceDesc={<p>Developed{" "}
            <Link href="https://www.npmjs.com/package/@maxklema/mie-api-tools" target="_blank" id={styles.hyperlink}>WebChart API Tools</Link>, including WebChart{'\''}s chart export tool using with multithreading using Node.js worker_threads, improving upload speed by 90% in high-volume patient data
            handling. Created {" "}
            <Link href="https://github.com/maxklema/WebChart-Go" target="_blank" id={styles.hyperlink}>WebChart Go</Link>
            , too, a mobile application interface to WebChart.
            </p>}
        />
        <br /><br />
        <ExperienceCard
          imgSrc="./CodeClouds.png"
          imgAlt="CodeClouds Logo SVG"
          companyName="CodeClouds"
          positionTitle="Web Development and Design Intern"
          positionDate="Summer & Fall 2022"
          experienceDesc={<p>Wireframing, web development, and graphic design. 
            Created <Link href="https://ariseroanoke.org/" target="_blank" id={styles.hyperlink}>Arise Church site</Link>.
            </p>}
        />


      </div>



    </div>
  );
}
