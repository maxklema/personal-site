import styles from './page.module.css';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className={styles.blogNotFoundMainFrame}>
        <title>Blog not Found | Maxwell Klema</title>
        <img src="/error.png" alt="Error" className={styles.errorImg} />
        <h2 className={styles.errorHeading}>Sorry, the blog you are looking for does not exist.</h2>
        <p className={styles.paragraphError}>A list of all available blogs can be found in <Link className={styles.hyperLink} href="/writings">writings</Link></p>
    </div>
  );
}
