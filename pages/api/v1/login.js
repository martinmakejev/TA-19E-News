// Andmebaas
const users = [
  { email: 'Timmi@jou.ee', password: 'qwe123' },
  { email: 'some@email.com', password: 'qwe123' },
];
export default function handler(req, res) {
  // Adnembaasi päring
  const user = users.find((u) => u.email == req.body.email && u.password == req.body.password);
  console.log(user, req.body);
  if (!user) {
    // Wrong username or password message
    res.status(400).json({ success: false, message: 'invalid credentials' });
    return;
  }
  // Success
  res.status(200).json({ success: true, user });
}
