const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors()); // Enable cross-origin requests
app.use(express.json()); // Parse JSON request bodies

// Contact API endpoint
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Handle the data (e.g., save to database, send email)
  console.log(`Received message from ${name} (${email}): ${message}`);

  // Send a success response
  res.status(200).json({ message: "Message received successfully!" });
});

// Start the server
const PORT = 5000; // You can change this port if needed
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
