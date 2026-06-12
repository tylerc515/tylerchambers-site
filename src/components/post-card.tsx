"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { PostMeta } from "@/lib/mdx";
import { formatDate } from "@/lib/date";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent"
      >
        <div className="flex items-center gap-3 text-xs text-muted">
          <time dateTime={post.date} className="font-mono">
            {formatDate(post.date)}
          </time>
          <span aria-hidden>&middot;</span>
          <span>{post.readingTime}</span>
        </div>
        <h2 className="font-display text-xl font-semibold tracking-tight">
          {post.title}
        </h2>
        <p className="text-sm text-muted">{post.excerpt}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
