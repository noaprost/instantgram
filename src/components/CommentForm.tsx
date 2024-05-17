import { FormEvent, useState } from "react";
import { FaRegSmileWink } from "react-icons/fa";

type Props = {
  onPostComment: (comment: string) => void;
};

export default function CommentForm({ onPostComment }: Props) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onPostComment(comment);
    setComment("");
  };

  const [comment, setComment] = useState("");

  const buttonDisabled = comment.length === 0;
  return (
    <form
      className="w-full flex items-center p-3 border-t-2"
      onSubmit={handleSubmit}
    >
      <FaRegSmileWink className="mr-4 w-5 h-5" />
      <input
        type="text"
        placeholder="Add a comment..."
        className="w-full outline-none"
        required
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        disabled={buttonDisabled}
        type="submit"
        className={`text-sm font-semibold cursor-pointer ${
          buttonDisabled ? "text-blue-300" : "text-blue-500"
        } `}
      >
        Post
      </button>
    </form>
  );
}
