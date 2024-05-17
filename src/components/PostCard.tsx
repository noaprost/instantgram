"use client";
import { SimplePost } from "@/model/post";
import { useState } from "react";
import CommentForm from "./CommentForm";
import ActionBar from "./ActionBar";
import ModalPortal from "./ModalPortal";
import Image from "next/image";
import PostModal from "./PostModal";
import PostDetail from "./PostDetail";
import PostProfile from "./PostProfile";
import Comment from "./Comment";

type Props = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostCard({ post, priority = false }: Props) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { userImage, username, image, comments, text } = post;

  const handleClick = () => {
    setOpenModal(true);
  };
  return (
    <div className="shadow-md rounded-lg w-[400px] mb-6">
      <PostProfile userImage={userImage} username={username} />
      <Image
        src={image}
        alt={`photo by ${username}`}
        className="object-cover aspect-square"
        width={400}
        height={400}
        priority={priority}
        onClick={handleClick}
      />
      <ActionBar post={post}>
        {username && text && <Comment username={username} text={text} />}
        {comments > 1 && (
          <button
            className="px-4 text-xs text-sky-500 font-semibold"
            onClick={() => setOpenModal(true)}
          >{`View all ${comments} comments`}</button>
        )}
      </ActionBar>
      <CommentForm />
      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </ModalPortal>
      )}
    </div>
  );
}
