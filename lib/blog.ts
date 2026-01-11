import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

interface BlogMetadata {
  title: string;
  date: string;
  description: string;
  slug: number;
}

interface BlogPost {
  metadata: BlogMetadata;
  content: string;
}

const blogPath = path.join(process.cwd(), 'content/blogs');

export async function getAllBlogs(): Promise<BlogMetadata[]> {
    const res: BlogMetadata[] = [];
        
    try {
        const files = await fs.promises.readdir( blogPath );

        for (const file of files){
            if (!file.endsWith('.md')) continue;
            
            const slugPath = path.join(blogPath, file);
            const blogStr = await fs.promises.readFile(slugPath, 'utf-8');
            const { data } = matter(blogStr);
            
            const slug = parseInt(file.replace('.md', ''), 10);
            
            res.push({
                ...data,
                slug
            } as BlogMetadata);
        }
    } catch ( e : any ){
        console.error("Error reading blog dir: ", e as Error);
    }

    return res.reverse();
}

export async function getBlogbySlug(slug: number): Promise<BlogPost> {
    const slugFile = slug.toString() + '.md';
    const slugPath = path.join(blogPath, slugFile);
    const blogStr = await fs.promises.readFile(slugPath, 'utf-8');
    const { data, content } = matter(blogStr);
    return { metadata: data as BlogMetadata, content }
}