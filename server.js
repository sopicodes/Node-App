const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <body style="background: url('https://images.rawpixel.com/.../retrozone-bg-03-x.jpg') no-repeat center center fixed; background-size: cover;">
    <h1>My Node.js App</h1>
    <p><strong>Name:</strong> Sophia Lorin S. Huelgas</p>
    <p><strong>Section:</strong> BSIT-BA-4101</p>
    <blockquote>"Anyone who has never made a mistake has never tried anything new."</blockquote>
    </body>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
