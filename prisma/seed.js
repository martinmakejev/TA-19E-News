const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

async function main() {
  const news1 = await prisma.news.upsert({
    where: { id:1 },
    update: {},
    create: {
  
      school: {
        create:{

        },
      },
      // school_id: 1,
      class: {
        create: { },
      },
      // class_id: 2,
      news_title: "uudis2",
      author_name: "artur Artur artur",
      news_content:
        "artur artur artur artur artur artur artur artur artur artur artur artur artur artur artur artur artur artur artur artur artur artur artur artur artur artur artur ",
      news_images: "lol.png",
      release_date: new Date(),
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
