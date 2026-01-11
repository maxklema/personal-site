import styles from "./page.module.css";
import { getBlogbySlug } from "../../../../lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string}>
}) {

    const { slug } = await params;
    const post = await getBlogbySlug(parseInt(slug));

    return (
        <div className={styles.blogMainFrame}>
            <h2 className={styles.blogTitle}>{post.metadata.title}</h2>
            <p className={styles.blogDate}>{post.metadata.date}</p>
            <img src={`/blog thumbnails/${slug}.png`} alt={`blog ${slug} thumbnail image`} />
            <p className={styles.blogDescription}>{post.metadata.description}</p>
            <MDXRemote source={post.content}/>
        </div>
    )
}
