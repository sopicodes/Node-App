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

      <!-- Google Font -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }

        body {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.3)
            ),
            url('https://wallpapers.com/images/hd/purple-white-wavy-checkered-pattern-w3idoav6gjuexsi3.jpg')
            no-repeat center center fixed;
          background-size: cover;
          color: white;
        }

        .card {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(10px);
          padding: 40px 50px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
          width: 420px;
        }

        h1 {
          font-weight: 600;
          font-size: 28px;
          margin-bottom: 15px;
        }

        p {
          font-size: 18px;
          margin: 8px 0;
        }

        .quote {
          margin-top: 20px;
          font-size: 16px;
          font-style: italic;
          position: relative;
          padding-left: 15px;
        }

        .quote::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 4px;
          height: 100%;
          background: #ffd369;
          border-radius: 5px;
        }

      </style>
    </head>

    <body>
      <div class="card">
        <h1>Hello, I’m Sophia! 🌼</h1>

        <p><strong>Name:</strong> Sophia Lorin S. Huelgas</p>
        <p><strong>Section:</strong> BSIT-BA-4101</p>

        <p class="quote">
          “Anyone who has never made a mistake has never tried anything new.”
        </p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
