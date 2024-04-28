import { FaRegHeart } from "react-icons/fa";

type Props = {
  classname?: string;
};

export default function HeartIcon({ classname }: Props) {
  return <FaRegHeart className={classname || "w-6 h-6"} />;
}
