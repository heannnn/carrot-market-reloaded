import db from "@/lib/db";
import getSession from "@/lib/session";
import { notFound, redirect } from "next/navigation";

async function getUser() {
  const session = await getSession();
  if (session.id) {
    const user = await db.user.findUnique({
      where: {
        id: session.id,
      },
    });
    if (user) {
      return user;
    }
  }

  notFound();
}

export default async function Profile() {
  const user = await getUser();

  const logOut = async () => {
    // component는 default로 server component로 생성되지만 server action 생성시에는 "use server"를 반드시 명시해줘야한다.
    "use server";
    const session = await getSession();
    session.destroy();
    redirect("/");
  };

  return (
    <div>
      <h1>Welcome! {user?.username}</h1>
      <form action={logOut}>
        {/* form 제출 (server action을 만들기 위해, onClick을 정의할 필요가 없다.) */}
        <button>log out</button>
      </form>
    </div>
  );
}
