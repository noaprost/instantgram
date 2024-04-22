// 모든 검색 결과를 가져오는 곳

import { searchUsers } from "@/service/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request : NextRequest) {
    const keyword = request.nextUrl.searchParams.get("keyword")
    return searchUsers(keyword).then((data) => NextResponse.json(data))
}