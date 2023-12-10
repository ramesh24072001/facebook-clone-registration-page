//nodejs for server_side
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/facebook', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Create a mongoose model
const User = mongoose.model('User', {
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  dobDay: Number,
  dobMonth: Number,
  dobYear: Number,
  gender: String
});

// Middleware to parse JSON
app.use(express.json());

// POST endpoint for form submission
app.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Serve static files (your HTML, CSS, and JS)
app.use(express.static('public'));

// Start the server
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:${PORT}');
});
