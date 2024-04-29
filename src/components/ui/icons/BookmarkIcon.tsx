import { FaRegBookmark } from "react-icons/fa6";

type Props = {
  classname?: string;
};

export default function BookmarkIcon({ classname }: Props) {
  return <FaRegBookmark className={classname || "w-5 h-5"} />;
}
