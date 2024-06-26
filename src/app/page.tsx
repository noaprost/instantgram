import Followingbar from "@/components/Followingbar";
import Sidebar from "@/components/Sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/authOptions";
import { redirect } from "next/navigation";
import PostsList from "@/components/PostsList";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect("/auth/signin");
  }

  return (
    <section className="flex flex-col md:flex-row mx-32">
      <div className="basis-3/4 mx-auto flex flex-col items-center">
        <Followingbar />
        <PostsList />
      </div>
      <div className="basis-1/4">
        <Sidebar user={user} />
      </div>
    </section>
  );
}
