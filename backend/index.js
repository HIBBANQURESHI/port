const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Configure Nodemailer with direct app password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'qureshihibban@gmail.com', // Replace with your Gmail address
    pass: 'sgah tftw hfvk gztq', // Replace with your app password
  },
});

// Contact form endpoint
app.post('/contact', async (req, res) => {
  const { firstname, lastname, email, phone, message } = req.body;

  try {
    await transporter.sendMail({
      from: 'qureshihibban@gmail.com', // Use your Gmail as the sender's address
      to: 'qureshihibban@gmail.com', // Also use your Gmail as the recipient
      subject: `Contact form submission from ${firstname} ${lastname}`,
      text: `Name: ${firstname} ${lastname}\nEmail: ${email}\nPhone: ${phone}\nMessage:\n${message}`,
    });

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending message. Please try again later.' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
