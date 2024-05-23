// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files (HTML and JavaScript)
app.use(express.static('public'));

// Handle form submission
app.post('/submit', (req, res) => {
  const formData = req.body;

  // Save the data to a file (append to the file)
  const filePath = path.join(__dirname, 'data.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err && err.code !== 'ENOENT') {
      console.error('Error reading file:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const existingData = data ? JSON.parse(data) : [];
    existingData.push(formData);

    fs.writeFile(filePath, JSON.stringify(existingData, null, 2), (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      res.json({ message: 'Data saved successfully' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
