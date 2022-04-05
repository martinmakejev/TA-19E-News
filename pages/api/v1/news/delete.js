import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

export default async function createNews(req, res) {
  if (req.method === 'DELETE') {
    try {
      const news = await prismaClient.news.delete({
        where: {
          id: 5,
        },
      });
      res.status(200).json({ success: true, news });
    } catch (err) {
      res.status(err).json({});
    }
  } else {
    res.status(405);
    res.end();
    console.log('failure');
  }
}
