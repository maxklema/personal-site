import styles from "./page.module.css";
import { getBlogbySlug } from "../../../../lib/blog";

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string}>
}) {

    const { slug } = await params;
    const post = await getBlogbySlug(parseInt(slug));
    console.log("SLUG: " + slug);

    return (
        <div>
            <h2>{post.metadata.title}</h2>
            <p>{post.content}</p>
        </div>
    )
}
