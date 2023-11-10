const express = require("express");
const { getCustomers } = require("../controller/customerController");

const customerRouter = express.Router();

customerRouter.get("/", getCustomers);

module.exports = customerRouter;