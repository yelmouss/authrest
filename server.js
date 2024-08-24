const express = require("express");
const mongoose = require("mongoose");
const UserRoutes = require("./routes/UserRoutes");


require("dotenv").config();

const app = express();

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to the database!");
}).catch((err) => {
  console.error("Cannot connect to the database!", err);
});

app.use(express.json());

app.use("/api", UserRoutes);

app.get("/", (req, res) => {
  res.json({
    monsupermessage: "Hello World",
  });
});

const port = 8000;
app.listen(port, () => {
 console.log(process.env.MAVARIABLE)
  console.log(`Server is running on port ${port}`);
});
