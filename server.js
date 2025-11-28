const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Node Page</title>

      <style>
        body {
          margin: 0;
          padding: 0;
          background: url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA2L3JldHJvem9uZS1iZy0wMy14LmpwZw.jpg') 
                      no-repeat center center fixed;
          background-size: cover;
          font-family: Arial, sans-serif;
          color: white;
          text-shadow: 0 2px 8px rgba(0,0,0,0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .box {
          background: rgba(0,0,0,0.5);
          padding: 40px;
          border-radius: 10px;
          text-align: center;
        }

        h1 { margin-bottom: 10px; }
        blockquote {
          font-style: italic;
          margin-top: 20px;
        }
      </style>
    </head>

    <body>
      <div class="box">
        <h1>Welcome to my Node.js Page!</h1>
        <p><strong>Name:</strong> Sophia PPP</p>
        <p><strong>Section:</strong> BSIT 5</p>
        <blockquote>"Anyone who has never made a mistake has never tried anything new."</blockquote>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
