import { FullPost, SimplePost } from "@/model/post";
import useSWR from "swr";

export default function PostDetail({ post }: { post: SimplePost }) {
  const { id, userImage, username, image, createdAt, likes } = post;
  const { data } = useSWR<FullPost>(`/api/post/${id}`);
  const comments = data?.comments;
  console.log(comments);
  return <></>;
}
