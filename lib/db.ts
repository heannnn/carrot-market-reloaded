import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function test() {
  // const user = await db.user.create({
  //   data: {
  //     username: "heann",
  //     phone: "2323",
  //   },
  // });

  // console.log(user);

  const users = await db.user.findMany({
    where: {
      username: {
        contains: "est",
      },
    },
  });

  console.log(users);
}

test();
export default db;
