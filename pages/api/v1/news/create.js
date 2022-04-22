import { PrismaClient } from "@prisma/client";

let prismaClient = new PrismaClient();

export default async function createNews(req, res) {
  if (req.method === 'POST'){
    try {
      let news = await prismaClient.news.create({
        data: {

          school_id: parseInt(req.body.school_id),
          class_id: parseInt(req.body.class_id),
          news_title: req.body.news_title,
          author_name: "req.body.author_name",
          news_content: req.body.news_content,
          news_images: "req.body.news_images",
          release_date: "2022-03-29T12:06:11.719Z"

          
        },
      });
      res.status(200).json({ success: true, news });
    }catch(err) {
      res.status(err).json({});
      console.log("you FUCKED UP")
    }
    } else {
      res.status(405);
      res.end();
      console.log('failure')
    }
  }
