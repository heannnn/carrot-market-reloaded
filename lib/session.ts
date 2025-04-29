import { getIronSession, SessionOptions } from "iron-session";
import { cookies } from "next/headers";

interface SessionContent {
  id?: number; // 세션에 id가 없을 수도 있음
}
export default async function getSession() {
  return await getIronSession<SessionContent>(cookies(), {
    cookieName: "delicious-karrot",
    password: process.env.COOKIE_PASSWORD,
  } as SessionOptions);
}
