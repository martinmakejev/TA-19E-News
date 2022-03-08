// Andmebaas
const news = [
    {title: "uus kodutöö lmao", text: "lmao", upload: "something", },
  ]
  export default function handler(req, res) {
    // Adnembaasi päring
    let newsnew = news.find(u=>u.title == req.body.title && u.text == req.body.textarea && u.upload == req.body.upload)
    console.log(newsnew, req.body)
    if (!user) {

      // Wrong username or password message
      res.status(400).json({ success: false, message: 'invalid credentials' });
      return;
    }
     // Success
     res.status(200).json({ success: true, user: user })
  }