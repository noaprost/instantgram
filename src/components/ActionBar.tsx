import { format } from "timeago.js";
import { useState } from "react";
import Comment from "./Comment";
import ToggleButton from "./ui/ToggleButton";
import HeartFillIcon from "./ui/icons/HeartFillIcon";
import HeartIcon from "./ui/icons/HeartIcon";
import BookmarkFillIcon from "./ui/icons/BookmarkFillIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import { SimplePost } from "@/model/post";
import { useSession } from "next-auth/react";
import UsePosts from "@/hooks/usePosts";

type Props = {
  post: SimplePost;
};

export default function ActionBar({ post }: Props) {
  const { likes, username, text, createdAt } = post;
  const { data: session } = useSession();
  const user = session?.user;
  const liked = user ? likes.includes(user.username) : false;
  const bookmarked = user ? user.bookmarks.includes(post.id) : false;
  const { setLike } = UsePosts();
  const handleLike = (like: boolean) => {
    if (user) {
      setLike(post, user.username, like);
    }
  };
  const handleBookmark = (bookmark: boolean) => {

  };

  return (
    <div>
      <div className="flex justify-between p-4">
        <ToggleButton
          toggled={liked}
          onToggle={handleLike}
          onIcon={<HeartFillIcon />}
          offIcon={<HeartIcon />}
        />
        <ToggleButton
          toggled={bookmarked}
          onToggle={handleBookmark}
          onIcon={<BookmarkFillIcon />}
          offIcon={<BookmarkIcon />}
        />
      </div>
      <p className="text-xs px-4 py-1 font-semibold">
        {likes ? `${likes.length} likes` : `0 like`}
      </p>
      {username && text && <Comment username={username} text={text} />}
      <p className="text-xs text-neutral-400 px-4 py-2">
        {format(createdAt, "en_US").toUpperCase()}
      </p>
    </div>
  );
}
