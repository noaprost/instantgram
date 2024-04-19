/* eslint-disable @next/next/no-img-element */
import { SimplePost } from "@/model/post";
import Profile from "./Profile";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { FaRegSmileWink } from "react-icons/fa";
import { format, render, cancel, register } from "timeago.js";

type Props = {
  post: SimplePost;
};

export default function PostCard({ post }: Props) {
  return (
    <div className="shadow-md rounded-lg w-[550px] mb-6">
      <div className="flex gap-2 p-3">
        <Profile image={post.userImage} ring />
        <p>{post.username}</p>
      </div>
      <img src={post.image} alt="post image" className="object-cover" />
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
      <div className="flex items-center w-full p-4 border-t-2">
        <FaRegSmileWink className="mr-4 w-5 h-5" />
        <form className="w-full flex items-center">
          <input
            type="text"
            placeholder="Add a comment..."
            className="w-full outline-none"
          />
          <button
            type="submit"
            className="text-sm font-semibold text-blue-500 cursor-pointer"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}
