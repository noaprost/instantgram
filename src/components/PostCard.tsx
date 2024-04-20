"use client";

import { SimplePost } from "@/model/post";
import Profile from "./Profile";
import CommentForm from "./CommentForm";
import ActionBar from "./ActionBar";
import { useState } from "react";
import ModalPortal from "./ModalPortal";
import Image from "next/image";
import PostModal from "./PostModal";
import PostDetail from "./PostDetail";

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
    <div className="shadow-md rounded-lg w-[550px] mb-6">
      <div className="flex gap-2 p-3">
        <Profile image={post.userImage} ring />
        <p>{post.username}</p>
      </div>
      <Image
        src={post.image}
        alt={`photo by ${post.username}`}
        className="object-cover aspect-square"
        width={500}
        height={500}
        priority={priority}
        onClick={handleClick}
      />
      <ActionBar post={post} />
      <CommentForm />
      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post}/>
          </PostModal>
        </ModalPortal>
      )}
    </div>
  );
}
