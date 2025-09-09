import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";

// ✅ Pre-generate ids for static pages
export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Page({ params }: any) {
  const post = posts.find((post) => post.id === params.id);

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <>
      <h1>Post</h1>
      <Post {...post} />
    </>
  );
}
