"use client";
import PostCard from "./PostCard";
import GridSpinner from "./GridSpinner";
import usePosts from "@/hooks/usePosts";

export default function PostsList() {
  const { posts, isLoading: loading } = usePosts();

  return (
    <section className="flex flex-col">
      {loading && (
        <div className="text-center mt-32">
          <GridSpinner color="orange" />
        </div>
      )}
      {posts &&
        posts.map((post, index) => (
          <PostCard key={post.id} post={post} priority={index < 2} />
        ))}
    </section>
  );
}
