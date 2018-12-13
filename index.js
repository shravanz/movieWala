const express = require("express");
const app = express();
const mongoose = require("mongoose");
const genres = require("./routes/genres");
const customers = require("./routes/customers");

//Connection to MongoDB through mongoose
mongoose.set("useFindAndModify", false);
// Above code is used due some deprecation of functionality in Update Method
mongoose
  .connect(
    "mongodb://localhost/movieWale",
    { useNewUrlParser: true }
  )
  .then(() => console.log("connected to MongoDB.."))
  .catch(err => console.error("Could not connect to MongoDB.."));

app.use(express.json());
app.use("/api", genres);
app.use("/api", customers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
