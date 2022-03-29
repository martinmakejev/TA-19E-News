import { PrismaClient } from "@prisma/client";

const handler = async (req, res) => {
  if (req.method === "GET") {
    let prisma = new PrismaClient();
    const news = await prisma.news.findUnique({
      where: {
        id: req.query.id, // see query.id on siis urli pealt see /api/v1/news/20 => 20
      },
    });
    res.status(200).json({ success: true, news });
  }
};
export default handler;
