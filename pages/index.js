import Head from "next/head";
import Link from "next/Link";
import { getPosts } from "../lib/posts";
export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts },
  };
}
function IndexPage({ posts }) {
  console.log("home page render", posts);
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
export default IndexPage;
