const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const connectDatabase = require("./config/connectToDb")
dotenv.config();


app.use(cors())
app.use(express.json());
connectDatabase();

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server started on ${process.env.PORT}`)
);