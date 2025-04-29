import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return Response.json({
    ok: true,
  });
}

// Request보다 NextRequest가 더 멋진 점은 cookie 정보와 ip나 위치 정보, 현재 사용자의 url과 이동할 url 정보까지 제공해준다.
export async function POST(request: NextRequest) {
  const data = await request.json();
  return Response.json(data);
}
