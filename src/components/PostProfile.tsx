import Profile from "./Profile";

type Props = {
  userImage?: string | undefined;
  username: string;
};

export default function PostProfile({ userImage, username }: Props) {
  return (
    <div className="flex gap-2 p-3 items-center">
      <Profile image={userImage} ring />
      <p className="font-semibold">{username}</p>
    </div>
  );
}
