import { FaRegSmileWink } from "react-icons/fa";

export default function CommentForm() {
  return (
    <form className="w-full flex items-center p-3 border-t-2">
      <FaRegSmileWink className="mr-4 w-5 h-5" />
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
  );
}
