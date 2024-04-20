import { SimplePost } from "@/model/post";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { format } from "timeago.js";

export default function ActionBar({ post }: { post: SimplePost }) {
  return (
    <div>
      <div className="flex justify-between p-4">
        <FaRegHeart />
        <FaRegBookmark />
      </div>
      <p className="text-xs px-4 py-1 font-semibold">
        {post.likes ? `${post.likes.length} likes` : `0 like`}
      </p>
      <div className="px-4 py-1 flex gap-2 items-center">
        <p className="font-semibold text-sm">{post.username}</p>
        <p className="text-sm">{post.text}</p>
      </div>
      <p className="text-xs text-neutral-400 px-4 py-2">
        {format(post.createdAt, "en_US").toUpperCase()}
      </p>
    </div>
  );
}
