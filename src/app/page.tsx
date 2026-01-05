import styles from "./page.module.css";

export default function Page() {
  return (
      <div className={styles.aboutPageMainframe}>
        <div className={styles.bioFrame}>
          <div className={styles.bio}>
            <h1 id={styles.nameHeader}>Maxwell Klema</h1>
            <div className={styles.subBio}>
              <h5 id={styles.introHeader}>CS @ Purdue Fort Wayne (PFW)</h5>
              <p>he/him</p>
            </div>
            <br />
            <p>Hello! I am a developer/learner/vim-enjoyer studying Computer Science. I am currently a junior and graduate in May 2027.</p>
            <br />
            <p>I am passionate about building impactful and reliable solutions. My current area of study is DevSecOps, CI/CD automation, cloud infrastructure, and distributed systems.</p>
            <br />
            <p>Feel free to contact me at</p>
            <a href="mailto:klemmr02@purdue.edu" id={styles.email}>klemmr02@purdue.edu</a>
          </div>
          <div className={styles.portrait}>
            <img src="/max-portrait.jpeg" alt="Max Klema Portrait 2025" />
            <p>taken: 12/31/25</p>
          </div>
        </div>



      </div>
  );
}
