import { format } from "timeago.js";
import ToggleButton from "./ui/ToggleButton";
import HeartFillIcon from "./ui/icons/HeartFillIcon";
import HeartIcon from "./ui/icons/HeartIcon";
import BookmarkFillIcon from "./ui/icons/BookmarkFillIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import { Comment, SimplePost } from "@/model/post";
import useMe from "@/hooks/useMe";
import { ReactNode } from "react";
import usePosts from "@/hooks/usePosts";
import CommentForm from "./CommentForm";

type Props = {
  post: SimplePost;
  children?: ReactNode;
  onComment: (comment: Comment) => void;
};

export default function ActionBar({ post, children, onComment }: Props) {
  const { likes, createdAt, id } = post;

  const { setLike } = usePosts();
  const { setBookmark, user } = useMe();

  const liked = user ? likes.includes(user.username) : false;
  const bookmarked = user?.bookmarks.includes(id) ?? false;

  const handleLike = (like: boolean) => {
    user && setLike(post, user.username, like);
  };

  const handleBookmark = (bookmark: boolean) => {
    user && setBookmark(id, bookmark);
  };

  const handleComment = (comment: string) => {
    user && onComment({ comment, username: user.username, image: user.image });
  };

  return (
    <>
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
        {children}
        <p className="text-xs text-neutral-400 px-4 py-2">
          {format(createdAt, "en_US").toUpperCase()}
        </p>
      </div>
      <CommentForm onPostComment={handleComment} />
    </>
  );
}
