import { PrismaClient } from "@prisma/client";

const handler = async (req, res) => {
  if (req.method === "GET") {
    let primsaClient = new PrismaClient();
    let news = await primsaClient.news.findMany({});
    res.status(200).json({ success: true, news });
  }
};
export default handler;
