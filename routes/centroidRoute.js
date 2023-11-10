const express = require("express");
const { createCentroid, getCentroidsNearest } = require("../controller/centroidController");

const centroidRouter = express.Router();

centroidRouter.post("/centroids", createCentroid);
centroidRouter.post("/centroid-predict", getCentroidsNearest);

module.exports = centroidRouter;