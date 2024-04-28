import { ProfileUser } from "@/model/user";
import Profile from "./Profile";
import FollowButton from "./FollowButton";

type Props = {
  user: ProfileUser;
};

export default function UserProfile({ user }: Props) {
  const { username, image, followers, following, posts, name } = user;
  const info = [
    {
      title: "posts",
      data: posts,
    },
    {
      title: "followers",
      data: followers,
    },
    {
      title: "following",
      data: following,
    },
  ];
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center py-12 border-b border-neutral-300">
      <Profile image={image} size="xlarge" ring />
      <div className="md:ml-10">
        <div className="flex flex-col md:flex-row items-center mb-1">
          <p className="md:mr-8 text-2xl my-2 md:my-0">{username}</p>
          <FollowButton user={user} />
        </div>
        <ul className="flex gap-4 my-4">
          {info.map(({ data, title }, index) => (
            <li key={index} className="text-sm">
              <span className="font-bold mr-1">{data}</span>
              {title}
            </li>
          ))}
        </ul>
        <p className="font-bold text-xl text-center md:text-start">{name}</p>
      </div>
    </section>
  );
}
