import { PrismaClient } from "@prisma/client";

let prismaClient = new PrismaClient();

const handler = async (req, res) => {
  if (req.method === "GET") {
    let news = await prismaClient.news.findUnique({
      where: {
        id: parseInt(req.query.id), // see query.id on siis urli pealt see /api/v1/news/20 => 20
      },
    });
    res.status(200).json({ success: true, news });
  } else if (req.method === "DELETE") {
    let news = await prismaClient.news.delete({
      where: {
        id: parseInt(req.query.id), // see query.id on siis urli pealt see /api/v1/news/20 => 20
      },
    });
    res.status(200).json({ success: true, news });
  } else if (req.method === "POST") {
    let news = await prismaClient.news.update({
      where: {
        id: parseInt(req.query.id),
      },
      data: req.body,
    });
    res.status(200).json({ success: true, news });
  }
};
export default handler;
