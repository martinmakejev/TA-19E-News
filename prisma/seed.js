import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const uudis1 = await prisma.news.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      school: {
        create: [{ id: 1 }],
      },
      school_id: 1,
      class: {
        create: [{ id: 2 }],
      },
      class_id: 2,
      news_title: "uudis1",
      author_name: "Sten Sten Sten",
      news_content:
        "Sten Sten Sten Sten Sten Sten Sten Sten Sten Sten Sten Sten Sten Sten Sten Sten Sten Sten Sten Sten Sten Sten Sten Sten Sten Sten Sten ",
      news_images: "lol.png",
      release_date: new Date(),
      comment_id: 1,
    },
  });

  // const polytech = await prisma.school.upsert({
  //   where: { id: 1 },
  //   update: {},
  //   create: {
  //     id: 1,
  //   },
  // });
  // const ta19e = await prisma.school.upsert({
  //   where: { id: 2 },
  //   update: {},
  //   create: {
  //     id: 2,
  //   },
  // });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
