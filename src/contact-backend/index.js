const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

console.log('🟢 Backend file is executing...');

app.use(cors());
app.use(express.json());

app.post('/contact', async (req, res) => {

    const { name, email, subject, body } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'email.jordanschulte@gmail.com',
    replyTo: email,
    subject: `New contact form entry from ${name}`,
    text: `
You've recieved a new message from your contact form:

Name: ${name}
Email: ${email}

Subject: ${subject}

${body}
    `.trim()
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
