import { Comment, SimplePost } from "@/model/post";
import Image from "next/image";
import PostProfile from "./PostProfile";
import CommentForm from "./CommentForm";
import ActionBar from "./ActionBar";
import usePost from "@/hooks/usePost";

export default function PostDetail({ post }: { post: SimplePost }) {
  const { id, userImage, username, image } = post;
  const { post: data, postComment } = usePost(id);
  const comments = data?.comments;

  return (
    <div className="flex justify-center items-center bg-white w-2/3 h-3/4">
      <Image
        src={image}
        alt={`photo by ${post.username}`}
        width={400}
        height={800}
        className="h-full object-cover w-1/2 aspect-square"
      />
      <div className="w-1/2 h-full bg-white flex flex-col">
        <PostProfile userImage={userImage} username={username} />
        <div className="border-t border-b h-full overflow-y-scroll">
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
        <ActionBar post={post} onComment={postComment} />
      </div>
    </div>
  );
}
