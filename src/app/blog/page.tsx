import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import { PostCard } from "@/components/post-card";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on industrial operations, data analysis, software, and AI from Tyler Chambers.",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="container flex flex-col gap-section py-section">
      <PageHeader
        title="Blog"
        subtitle="Notes from the intersection of industry and code"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
