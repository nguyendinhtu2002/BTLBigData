const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const connectDatabase = require("./config/connectToDb");
// const patientRouter = require("./routes/patientRouter");
const centroidRouter = require("./routes/centroidRoute");
const customerRoute = require("./routes/customerRoute");
const path = require('path');

dotenv.config();


app.use(cors())
app.use(express.json());
connectDatabase();

// app.use('/api/v1/patient', patientRouter);
app.use('/api/', centroidRouter);
app.use('/api/customer', customerRoute);

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server started on ${process.env.PORT}`)
);

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
})