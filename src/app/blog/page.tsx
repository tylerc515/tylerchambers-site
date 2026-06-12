import { profile } from "@/content/profile";
import { getAllPosts } from "@/lib/mdx";
import { PostCard } from "@/components/post-card";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="container flex flex-col gap-section py-section">
      <div>
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Blog
        </h1>
        <p className="mt-2 max-w-xl text-muted">{profile.tagline}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
