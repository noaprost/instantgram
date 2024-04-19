import { User } from "@/model/user";
import Profile from "./Profile";

type Props = {
  user: User;
};

export default function Sidebar({ user: { name, username, image } }: Props) {
  return (
    <section className="max-w-[500px] h-full flex flex-col gap-6 border-l p-12">
      <div className="flex gap-5 items-center">
        {image && <Profile image={image} size="big" />}
        <div>
          <p className="font-bold">{username}</p>
          <p className="text-neutral-700 text-lg leading-6">{name}</p>
        </div>
      </div>
      <p className="text-neutral-500 text-sm text-wrap">
        About ▪️ Help ▪️ Press ▪️ API ▪️ Jobs ▪️ Privacy ▪️ Terms ▪️ Location ▪️
        Language
      </p>
      <p className="text-neutral-700 text-sm">
        ©️ Copyright INSTANTGRAM from METAL
      </p>
    </section>
  );
}
