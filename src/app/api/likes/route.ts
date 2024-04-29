import { authOptions } from "@/app/utils/authOptions";
import { disLikePost, likePost } from "@/service/post";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  const res = await req.json();
  console.log(res);
  const { id, like } = res;

  if (!id || like === undefined) {
    console.log(3, id, like);
    return new Response("Bad Request", { status: 400 });
  }

  const request = like ? likePost : disLikePost;

  return request(id, user.id)
    .then((res) => NextResponse.json(res))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
}
