const express = require("express");
const { getPatients } = require("../controller/patientModelController");

const patientRouter = express.Router();

patientRouter.get("/", getPatients);

module.exports = patientRouter;