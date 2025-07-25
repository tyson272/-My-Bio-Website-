 const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Received:', name, email, message);
  res.send('Contact form received!');
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Received:', name, email, message); // 👈 Logs to terminal
  res.send('Thanks for contacting!');
});
const fs = require('fs');

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const contactData = {
    name,
    email,
    message,
    time: new Date().toLocaleString()
  };

  // Save to contacts.json
  fs.appendFile('contacts.json', JSON.stringify(contactData) + '\n', err => {
    if (err) {
      console.error('Error writing file:', err);
      return res.status(500).send('Server error');
    }
    res.send('Message saved successfully!');
  });
});
