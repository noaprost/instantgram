"use client";
import "react-multi-carousel/lib/styles.css";
import Profile from "./Profile";
import { PropagateLoader } from "react-spinners";
import Link from "next/link";
import ScrollableBar from "./ScrollableBar";
import useMe from "@/hooks/useMe";

export default function Followingbar() {
  const { user, isLoading: loading, error } = useMe();
  const users = user?.following;

  return (
    <section className="flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] w-[550px] overflow-x-auto relative z-0">
      {loading ? (
        <PropagateLoader size={12} color="orange" />
      ) : (
        !users ||
        (users.length === 0 ? (
          <p>{`follow someone!`}</p>
        ) : (
          error && <p>fail to load</p>
        ))
      )}
      {users && (
        <ScrollableBar>
          {users.map(({ username, image }) => (
            <Link
              key={username}
              href={`/user/${username}`}
              className="flex flex-col items-center w-20"
            >
              <Profile image={image} ring size="big" />
              <p className="w-full text-sm truncate text-center">{username}</p>
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  );
}
