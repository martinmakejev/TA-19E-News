import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

export default async function updateNews(req, res) {
  if (req.method === 'POST') {
    try {
      const news = await prismaClient.news.update({
        where: {
          id: 1,
        },
        data: {
          school_id: 1,
          class_id: 1,
          news_title: 'uudis2 aga see on edititud update api abil ',
          author_name: 'Janeks',
          news_content: 'kuidagi see töötab aga edit',
          news_images: 'lol.png',
          release_date: '2022-03-29T12:06:11.719Z',
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
