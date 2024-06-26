import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { getPost } from "@/service/post";
import { authOptions } from "@/app/utils/authOptions";

type Context = {
  params: {
    slug: string;
  };
};

export async function GET(_: NextRequest, context: Context) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  return getPost(context.params.slug).then((data) => NextResponse.json(data));
}
