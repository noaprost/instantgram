import { authOptions } from "@/app/utils/authOptions";
import { bookmarkPost, disBookmarkPost } from "@/service/post";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  const res = await req.json();
  const { id, bookmark } = res;

  if (!id || bookmark === undefined) {
    return new Response("Bad Request", { status: 400 });
  }

  const request = bookmark ? bookmarkPost : disBookmarkPost;

  return request(user.id, id)
    .then((res) => NextResponse.json(res))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
}
