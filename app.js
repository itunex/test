const express = require('express');
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Set the application to listen on a specific port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Serve static files from the public directory
app.use(express.static('public'));

// Add a new route for the /about page
app.get('/about', (req, res) => {
  res.send('<h1>About Us</h1><p>We are a team of developers passionate about Node.js and Express.js.</p>');
});