const express = require("express");
const path = require("path");

const app = express();

// for handling post requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// for displaying public page
app.use("/", express.static(path.join(__dirname, "public")));

// tansfering the calls receiving on "./api" --> "./routes/api"
app.use("/api", require("./routes/api"));

app.listen(2678, () => {
  console.log("server has started at http://localhost:2678");
});
