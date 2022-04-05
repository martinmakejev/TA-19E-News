import { PrismaClient } from '@prisma/client';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const primsaClient = new PrismaClient();
    const news = await primsaClient.news.findMany({});
    res.status(200).json({ success: true, news });
  }
};
export default handler;
