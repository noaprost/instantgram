"use client";

import useMe from "@/hooks/useMe";
import { ProfileUser } from "@/model/user";
type Props = {
  user: ProfileUser;
};

export default function FollowButton({ user }: Props) {
  const { user: authUser } = useMe();
  const { username } = user;
  const showButton = authUser && authUser.username !== username;
  const following =
    authUser && authUser.following.find((item) => item.username === username);
  const text = following ? "Unfollow" : "Follow";
  const color = following ? "bg-red-500" : "bg-green-600";
  return (
    <>
      {showButton && (
        <button
          className={`${color} font-semibold text-white py-1 px-4 rounded-lg text-sm`}
          onClick={() => {}}
        >
          {text}
        </button>
      )}
    </>
  );
}
