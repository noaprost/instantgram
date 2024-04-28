import UserPosts from "@/components/UserPosts";
import UserProfile from "@/components/UserProfile";
import { getUserInfoByUsername } from "@/service/user";
import { notFound } from "next/navigation";

type Props = {
  params: {
    username: string;
  };
};

export default async function UserPage({ params: { username } }: Props) {
  // 상단에는 사용자의 프로필과 정보 (userImage, username, name, post개수 followers 수, following 수)
  // 하단에는 사용자가 올린 포스트, 북마크, 좋아요누른 포스트 (posts, bookmarks, likes)
  const user = await getUserInfoByUsername(username);

  if (!user) {
    notFound();
  }
  return (
    <div className="flex flex-col gap-10 w-full">
      <UserProfile user={user} />
      <UserPosts />
    </div>
  );
}
