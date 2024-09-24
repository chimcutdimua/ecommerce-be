const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/dbconnect");
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 8888;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnect();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
