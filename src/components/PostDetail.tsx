import { FullPost, SimplePost } from "@/model/post";
import Image from "next/image";
import useSWR from "swr";
import PostProfile from "./PostProfile";
import CommentForm from "./CommentForm";
import ActionBar from "./ActionBar";
import usePost from "@/hooks/usePost";
import useMe from "@/hooks/useMe";

export default function PostDetail({ post }: { post: SimplePost }) {
  const { id, userImage, username, image } = post;
  const { post: data, postComment } = usePost(id);
  const comments = data?.comments;
  const { user } = useMe();

  const handlePostComment = (comment: string) => {
    user &&
      postComment({ comment, image: user.image, username: user.username });
  };

  return (
    <div className="flex justify-center items-center bg-white">
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
          {comments &&
            comments.map((comment, index) => (
              <div className="flex items-center" key={index}>
                <PostProfile
                  userImage={comment.image}
                  username={comment.username}
                />
                <p className="text-sm">{comment.comment}</p>
              </div>
            ))}
        </div>
        <ActionBar post={post} />
        <CommentForm onPostComment={handlePostComment} />
      </div>
    </div>
  );
}
