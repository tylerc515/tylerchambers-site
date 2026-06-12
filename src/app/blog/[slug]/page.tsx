import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { formatDate } from "@/lib/date";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-prose py-section">
      <Link
        href="/blog"
        className="text-sm text-muted transition-colors hover:text-text"
      >
        &larr; Back to Blog
      </Link>

      <header className="mt-6 flex flex-col gap-3">
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 text-sm text-muted">
          <time dateTime={post.date} className="font-mono">
            {formatDate(post.date)}
          </time>
          <span aria-hidden>&middot;</span>
          <span>{post.readingTime}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="prose mt-10">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
