import { SimplePost } from "@/model/post";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { format } from "timeago.js";
import Comment from "./Comment";

type Props = {
  likes?: string[];
  username?: string;
  text?: string;
  createdAt: string;
};

export default function ActionBar({ likes, username, text, createdAt }: Props) {
  return (
    <div>
      <div className="flex justify-between p-4">
        <FaRegHeart />
        <FaRegBookmark />
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
