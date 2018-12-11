const express = require("express");
const app = express();
const mongoose = require("mongoose");
const genres = require("./routes/genres");

//Connection to MongoDB through mongoose
mongoose
  .connect(
    "mongodb://localhost/movieWale",
    { useNewUrlParser: true }
  )
  .then(() => console.log("connected to MongoDB.."))
  .catch(err => console.error("Could not connect to MongoDB.."));

app.use(express.json());
app.use("/api", genres);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
