import { PrismaClient } from "@prisma/client";

const handler = async (req, res) => {
  if (req.method === "GET") {
    let primsaClient = new PrismaClient();
    const news = await primsaClient.news.findUnique({
      where: {
        id: parseInt(req.query.id), // see query.id on siis urli pealt see /api/v1/news/20 => 20
      },
    });
    res.status(200).json({ success: true, news });
  }
};
export default handler;
