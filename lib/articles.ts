import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export function getAllArticles(): ArticleMeta[] {
  const files = fs.readdirSync(articlesDirectory);
  return files.filter((file) => file.endsWith(".mdx")).map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const source = fs.readFileSync(path.join(articlesDirectory, file), "utf8");
    const { data } = matter(source);
    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
    };
  }).sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getArticleSource(slug: string): string {
  const filePath = path.join(articlesDirectory, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { content } = matter(raw);
  return content;
}
