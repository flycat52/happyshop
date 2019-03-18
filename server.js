const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const port = process.env.PORT || 9000;
const fetch = require("node-fetch");
const { Pool } = require("pg");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const DB_CONNECTION =
  "postgres://vwxntufqghmuhp:3651b802a522991f11e589f5c0e96bb1ae2fa66a9ed67ea0404bd6e21cc9f36f@ec2-184-73-216-48.compute-1.amazonaws.com:5432/d4aub72vssg1aq";
const pool = new Pool({
  connectionString: DB_CONNECTION,
  ssl: true
});

app.get("/api/products", async (req, res) => {
  const client = await pool.connect();
  const query = `SELECT product_id, title, price, description, picture  
                  FROM products
                  ORDER BY product_id; `;
  await client.query(query, (err, result) => {
    res.send({ status: 200, data: result.rows });
  });

  client.release();
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
