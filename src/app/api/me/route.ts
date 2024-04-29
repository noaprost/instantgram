import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/authOptions";
import { getUserByUsername } from "@/service/user";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }
  return getUserByUsername(user.username).then((data) =>
    NextResponse.json(data)
  );
}
