import { FullPost, SimplePost } from "@/model/post";
import Image from "next/image";
import useSWR from "swr";
import PostProfile from "./PostProfile";
import CommentForm from "./CommentForm";
import ActionBar from "./ActionBar";
import Comment from "./Comment";

export default function PostDetail({ post }: { post: SimplePost }) {
  const { id, userImage, username, image, createdAt, likes, text } = post;
  const { data } = useSWR<FullPost>(`/api/post/${id}`);
  const comments = data?.comments;
  return (
    <div className="flex justify-center items-center">
      <Image
        src={image}
        alt={`photo by ${post.username}`}
        width={400}
        height={800}
        className="h-full object-cover w-1/2 aspect-square"
      />
      <div className="w-1/2 h-full bg-white flex flex-col">
        <PostProfile userImage={userImage} username={username} />
        <div className="border-t border-b h-64">
          <div className="flex items-center">
            <PostProfile userImage={userImage} username={username} />
            <p>{text}</p>
          </div>
        </div>
        <ActionBar likes={likes} createdAt={createdAt} />
        <CommentForm />
      </div>
    </div>
  );
}
