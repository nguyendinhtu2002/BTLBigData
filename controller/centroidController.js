const Centroids = require("../models/centroidModel")
const patientModel= require('../models/patientModel');
const { calculateDistance, getClusterFeatures } = require('../utils/centroidUtil');
const { preprocessData } = require('../utils/dataUtils');

const Joi = require("joi")

const createCentroid = async (req, res, next) => {
    try {
        const centroidsToAdd = req.body.map(centroidString => {
            const [age, spending_score,
                 work_experience, family_size,
                  profession_doctor, profession_engineer,
                  profession_entertainment, profession_executive,
                   profession_healthcare, profession_homemaker, 
                   profession_lawyer, profession_marketing, 
                   annual_income] = centroidString.split(',').map(parseFloat);

            return {
                age: parseFloat(age),
                spending_score: parseFloat(spending_score),
                work_experience: parseFloat(work_experience),
                family_size: parseFloat(family_size),
                profession_doctor: parseFloat(profession_doctor),
                profession_engineer: parseFloat(profession_engineer),
                profession_entertainment: parseFloat(profession_entertainment),
                profession_executive: parseFloat(profession_executive),
                profession_healthcare: parseFloat(profession_healthcare),
                profession_homemaker: parseFloat(profession_homemaker),
                profession_lawyer: parseFloat(profession_lawyer),
                profession_marketing: parseFloat(profession_marketing),
                annual_income: parseFloat(annual_income),
            };
        });
        
        const existingCentroids = await Centroids.find();
        if (existingCentroids.length > 0) {
            await Centroids.deleteMany({});
        }
        
        const createdCentroids = await Centroids.create(centroidsToAdd);

        res.status(201).json({
            status: 'success',
            data: {
                centroids: createdCentroids,
            },
        });
    } catch (error) {
        // console.log("🚀 ~ file: centroidController.js:51 ~ createCentroid ~ error:", error)
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}

const getCentroidsNearest = async (req, res) => {
    try {
        const centroids = await Centroids.find().sort({ age: -1 });
        const centroidData = centroids.map(centroid => {
            return {
                age: centroid.age,
                spending_score: centroid.spending_score,
                work_experience: centroid.work_experience,
                family_size: centroid.family_size,
                profession_docker: centroid.profession_docker,
                profession_engineer: centroid.profession_engineer,
                profession_entertainment: centroid.profession_entertainment,
                profession_executive: centroid.profession_executive,
                profession_healthcare: centroid.profession_healthcare,
                diabetes_pedigree: centroid.diabetes_pedigree,
                profession_homemaker: centroid.profession_homemaker,
                profession_lawyer: centroid.profession_lawyer,
                profession_marketing: centroid.profession_marketing,
                annual_income: centroid.annual_income
            };
        });
        const patient = req.body;
        const patientProcessed = new patientModel(await preprocessData(patient));

        let minDistance = Infinity;
        let centroidNearest = centroidData[0];
        for (let i = 0; i < centroidData.length; i++) {
            const centroid = centroidData[i];
            const distance = await calculateDistance(centroid, patientProcessed);
            if (minDistance > distance) {
                minDistance = distance;
                centroidNearest = centroid;
            }
        }
        
        const clusteredFetures = await getClusterFeatures(centroidNearest, centroidData);
        const result = await patientProcessed.save();

        res.status(200).json({
            status: 'success',
            data: {
                patient: result,
                centroid: centroidNearest,
                clusteredFetures: clusteredFetures,
            },
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
        });
    }
}; 



module.exports = { createCentroid, getCentroidsNearest};
