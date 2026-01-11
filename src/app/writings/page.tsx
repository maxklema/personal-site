import styles from "./page.module.css";
import { getAllBlogs } from "../../../lib/blog";
import Link from "next/link";

interface BlogMetadata {
  title: string;
  date: string;
  description: string;
  slug: number;
}


export default async function Page() {

  const blogs: BlogMetadata[] = await getAllBlogs();


  return (
    <div className={styles.pageMainFrame}>
      <h2 className={styles.writingsTitle}>Writings</h2>
      <div className={styles.blogGrid}>
        <div className={styles.gridCol}>
          {blogs
            .filter((post) => post.slug % 2 === 1)
            .map((post) => (
              <div key={post.slug} className={styles.blogPost}>
                <Link href={`/writings/${post.slug}`}>
                  <img src={`/blog thumbnails/${post.slug}.png`} alt="Maxwell Klema Blog" className={styles.blogImage}></img>
                  <p className={styles.blogDate}>{post.date}</p>
                  <p className={styles.blogTitle}>{post.title}</p>
                </Link>
              </div>
            ))}
        </div>
        <div className={styles.gridCol}>
          {blogs
            .filter((post) => post.slug % 2 === 0)
            .map((post) => (
              <div key={post.slug} className={styles.blogPost}>
                <Link href={`/writings/${post.slug}`}>
                  <img src={`/blog thumbnails/${post.slug}.png`} alt="Maxwell Klema Blog" className={styles.blogImage}></img>
                  <p className={styles.blogDate}>{post.date}</p>
                  <p className={styles.blogTitle}>{post.title}</p>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
