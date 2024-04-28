import { FaRegBookmark } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { BsGrid3X3 } from "react-icons/bs";

export default function UserPosts() {
  const data = [
    { icon: <BsGrid3X3 />, title: "POSTS" },
    { icon: <FaRegBookmark />, title: "SAVED" },
    { icon: <FaRegHeart />, title: "LIKED" },
  ];
  return (
    <section>
      <ul className="flex gap-28 justify-center">
        {data.map(({ icon, title }, index) => (
          <button key={index} className="flex items-center text-sm">
            {icon} {title}
          </button>
        ))}
      </ul>
    </section>
  );
}
