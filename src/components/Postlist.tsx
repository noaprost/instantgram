"use client";

import { SimplePost } from "@/model/post";
import useSWR from "swr";
import PostCard from "./PostCard";
import GridSpinner from "./GridSpinner";

export default function PostList() {
  const {
    data: posts,
    isLoading: loading,
    error,
  } = useSWR<SimplePost[]>("/api/post");

  return (
    <section className="flex flex-col">
      {loading && (
        <div className="text-center mt-32">
          <GridSpinner color="orange" />
        </div>
      )}
      {posts && posts.map((post, index) => <PostCard key={post.id} post={post} priority={index < 2} />)}
    </section>
  );
}
