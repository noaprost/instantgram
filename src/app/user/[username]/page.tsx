import UserPosts from "@/components/UserPosts";
import UserProfile from "@/components/UserProfile";
import { getUserInfoByUsername } from "@/service/user";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

type Props = {
  params: {
    username: string;
  };
};

const getUser = cache(async (username: string) =>
  getUserInfoByUsername(username)
);

export default async function UserPage({ params: { username } }: Props) {
  // 상단에는 사용자의 프로필과 정보 (userImage, username, name, post개수 followers 수, following 수)
  // 하단에는 사용자가 올린 포스트, 북마크, 좋아요누른 포스트 (posts, bookmarks, likes)
  const user = await getUser(username);

  if (!user) {
    notFound();
  }
  return (
    <div className="flex flex-col w-full">
      <UserProfile user={user} />
      <UserPosts user={user} />
    </div>
  );
}

export async function generateMetadata({
  params: { username },
}: Props): Promise<Metadata> {
  const user = await getUser(username);
  return {
    title: `${user?.name} (@${user?.username}) ◾ Instantgram Photos`,
    description: `${user?.name}'s all Instantgram posts`,
  };
}
