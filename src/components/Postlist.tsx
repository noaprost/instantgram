"use client";

import { SimplePost } from "@/model/post";
import useSWR from "swr";
import PostCard from "./PostCard";

export default function PostList() {
  const {
    data: posts,
    isLoading: loading,
    error,
  } = useSWR<SimplePost[]>("/api/post");

  return (
    <section className="flex flex-col">
      {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
    </section>
  );
}
