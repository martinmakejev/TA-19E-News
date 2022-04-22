import { PrismaClient } from "@prisma/client";

let prismaClient = new PrismaClient();
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var h = String(today.getHours()).padStart(2, '0');
var m = String(today.getMinutes()).padStart(2, '0');
var s = String(today.getSeconds()).padStart(2, '0');
var ms = String(today.getMilliseconds()).padStart(2, '0');


var yyyy = today.getFullYear();

today =yyyy+"-"+mm+"-" + dd + 'T' + h + ':' + m + ":" + s+ "."+ms+"Z";

export default async function createNews(req, res) {
  if (req.method === 'POST'){
    try {
      let news = await prismaClient.news.create({
        data: {

          school_id: parseInt(req.body.school_id),
          class_id: parseInt(req.body.class_id),
          news_title: req.body.news_title,
          author_name:  req.body.author_name,
          news_content: req.body.news_content,
          news_images: req.body.news_images,
          release_date: today

          
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
