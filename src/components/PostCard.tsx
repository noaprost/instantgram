"use client";

import { SimplePost } from "@/model/post";
import CommentForm from "./CommentForm";
import ActionBar from "./ActionBar";
import { useState } from "react";
import ModalPortal from "./ModalPortal";
import Image from "next/image";
import PostModal from "./PostModal";
import PostDetail from "./PostDetail";
import PostProfile from "./PostProfile";

type Props = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostCard({ post, priority = false }: Props) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleClick = () => {
    setOpenModal(true);
  };
  return (
    <div className="shadow-md rounded-lg w-[400px] mb-6">
      <PostProfile userImage={post.userImage} username={post.username} />
      <Image
        src={post.image}
        alt={`photo by ${post.username}`}
        className="object-cover aspect-square"
        width={400}
        height={400}
        priority={priority}
        onClick={handleClick}
      />
      <ActionBar
        likes={post.likes}
        username={post.username}
        text={post.text}
        createdAt={post.createdAt}
      />
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
