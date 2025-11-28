const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>My Node.js App</h1>
    <p><strong>Name:</strong> Your Full Name</p>
    <p><strong>Section:</strong> Your Class Section</p>
    <blockquote>"Your inspirational quote here."</blockquote>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
