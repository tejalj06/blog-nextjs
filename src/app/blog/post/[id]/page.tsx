import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";

type PageProps = {
  params: {
    id: string;
  };
};

//Tell Next.js which ids exist
export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function Page({ params }: PageProps) {
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
