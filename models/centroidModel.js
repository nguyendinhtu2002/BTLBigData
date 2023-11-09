const mongoose = require("mongoose");

const centroidSchema = new mongoose.Schema({
  age: {
    type: Number,
    require: true,
  },
  spending_score: {
    type: Number,
    require: true,
  },
  work_experience: {
    type: Number,
    require: true,
  },
  family_size: {
    type: Number,
    require: true,
  },
  profession_doctor: {
    type: Number,
    require: true,
  },
  profession_engineer: {
    type: Number,
    default: 0
  },
  profession_entertainment: {
    type: Number,
    default: 0
  },
  profession_executive: {
    type: Number,
    default: 0
  },
  profession_healthcare: {
    type: Number,
    default: 0
  },
  profession_homemaker: {
    type: Number,
    default: 0
  },
  profession_lawyer: {
    type: Number,
    default: 0
  },
  profession_marketing: {
    type: Number,
    default: 0
  },
  annual_income: {
    type: Number,
    require: true,
  },
});

const Centroids = mongoose.model("Centroids", centroidSchema);
module.exports =  Centroids ;
