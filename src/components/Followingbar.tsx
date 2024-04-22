"use client";
import "react-multi-carousel/lib/styles.css";
import useSWR from "swr";
import Profile from "./Profile";
import { DetailUser } from "@/model/user";
import { PropagateLoader } from "react-spinners";
import Link from "next/link";
import ScrollableBar from "./ScrollableBar";

export default function Followingbar() {
  const { data, isLoading: loading, error } = useSWR<DetailUser>("/api/me");
  // const users = data?.following;
  const users = data?.following && [
    ...data?.following,
    ...data?.following,
    ...data?.following,
  ];

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
          {users.map(({ name, image }) => (
            <Link
              key={name}
              href={`/user/${name}`}
              className="flex flex-col items-center w-20"
            >
              <Profile image={image} ring size="big" />
              <p className="w-full text-sm truncate text-center">{name}</p>
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  );
}
