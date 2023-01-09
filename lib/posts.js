import { promises as fs, readdir } from "fs";
import matter from "gray-matter";
import { marked } from "marked";
export async function getPost(slug) {
  const source = await fs.readFile(`content/posts/${slug}.md`, "utf8");
  const {
    data: { date, title },
    content,
  } = matter(source);
  console.log("content bbbb", content);
  console.log(marked);
  const body = marked(content);
  return { date, title, body };
}
export async function getPosts() {
  // dummy commit change
  const slugs = await getSlugs();
  const posts = [];
  for (const slug of slugs) {
    const post = await getPost(slug);
    posts.push({ slug, ...post });
  }
  return posts;
}
export async function getSlugs() {
  const suffix = ".md";
  const files = await fs.readdir("content/posts");
  return files
    .filter((file) => file.endsWith(suffix))
    .map((file) => file.slice(0, -suffix.length));
}
