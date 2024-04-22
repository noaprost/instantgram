import { SearchUser } from "@/model/user";
import Profile from "./Profile";
import Link from "next/link";

export default function UserCard({
  user: { image, name, username, followers, following },
}: {
  user: SearchUser;
}) {
  return (
    <Link
      href={`user/${username}`}
      className="flex items-center rounded-lg gap-2 border border-neutral-300 py-3 px-8 w-full mb-4 bg-white hover:bg-neutral-100"
      key={username}
    >
      <Profile image={image} size="big" />
      <div className="flex flex-col text-neutral-500">
        <p className="font-bold text-black">{name}</p>
        <p>{username}</p>
        <div className="flex gap-2">
          <p className="text-sm">{followers} followers</p>
          <p className="text-sm">{following} following</p>
        </div>
      </div>
    </Link>
  );
}
