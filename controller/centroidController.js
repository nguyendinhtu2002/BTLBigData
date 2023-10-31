const centroidModel = require("../models/centroidModel")
const Joi = require("joi")

const createCentroid = async (req, res, next) => {
    try {
        const schema = Joi.object({
            tenure: Joi.number()
                .required()
                .messages({
                    "any.required": "Tenure is required",
                }),
            balanceRange: Joi.number().required().messages({
                "any.required": "Password is required",
            }),
            purchaseRange: Joi.number().required().messages({
                "any.required": "Password is required",
            }),
            oneoffPurchaseRange: Joi.number().required().messages({
                "any.required": "Password is required",
            }),
            instanllmentsPurchaseRange: Joi.number().required().messages({
                "any.required": "Password is required",
            }),
            creaditLimitRange: Joi.number().required().messages({
                "any.required": "Password is required",
            }),
            paymentsRange: Joi.number().required().messages({
                "any.required": "Password is required",
            }),
            mininumPaymentRange: Joi.number().required().messages({
                "any.required": "Password is required",
            }),
            balanceFrequencyRange: Joi.number().required().messages({
                "any.required": "Password is required",
            }),
            purchaseFrequencyRange: Joi.number().required().messages({
                "any.required": "Password is required",
            }),
            oneoffPurchaseFrequencyRange: Joi.number().required().messages({
                "any.required": "Password is required",
            }),
            purchaseIntanllmentsFrenquencyRange: Joi.number().required().messages({
                "any.required": "Password is required",
            }),
            cashAdvandFrequencyRange: Joi.number().required().messages({
                "any.required": "Password is required",
            }),
            prcFullPaymentRange: Joi.number().required().messages({
                "any.required": "Password is required",
            }),
            purchaseTrxRange: Joi.number().required().messages({
                "any.required": "Password is required",
            }),
            cashAdvanceTrxRange: Joi.number().required().messages({
                "any.required": "Password is required",
            }),
            cluester: Joi.number().required().messages({
                "any.required": "Password is required",
            }),
        });
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({
                message: error.details[0].message,
            });
        }
        const existingCentroids = await centroidModel.find();
        if (existingCentroids.length > 0) {
            await Centroids.deleteMany({});
        }
        
        const createdCentroids = await centroidModel.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                centroids: createdCentroids,
            },
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}


