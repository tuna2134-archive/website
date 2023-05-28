import { promises as fs } from "fs";
import matter from "gray-matter";
import markdownToHtml from "zenn-markdown-html";

export interface Metadata {
  title: string;
  description: string;
  date: string;
  tags: string[];
};

export interface Blog {
  metadata: Metadata;
  content: string;
  id: string;
};

export async function getBlogs(): Promise<Blog[]> {
  const files = await fs.readdir("blogs");
  const blogs = await Promise.all(files.map(async (file: string) => {
    const Mdcontent = await fs.readFile(`blogs/${file}`, "utf-8");
    const { content, data } = matter(Mdcontent);
    return {
      metadata: data as Metadata,
      content,
      id: file.replace(".md", "")
    }
  }));
  return blogs;
};

export async function getBlog(id: string): Promise<Blog> {
  const Mdcontent = await fs.readFile(`blogs/${id}.md`, "utf-8");
  const { content, data } = matter(Mdcontent);
  return {
    metadata: data as Metadata,
    content: markdownToHtml(content),
    id
  }
};