const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    tenure: {
        type: Number,
        require: true,
    },
    balanceRange: {
        type: Number,
        require: true,
    },
    purchaseRange: {
        type: Number,
        require: true,
    },
    oneoffPurchaseRange: {
        type: Number,
        require: true,
    },
    instanllmentsPurchaseRange: {
        type: Number,
        require: true,
    },
    cashAdvanceRange: {
        type: Number,
        require: true,
    },
    creaditLimitRange: {
        type: Number,
        require: true,
    },
    paymentsRange: {
        type: Number,
        require: true,
    },
    mininumPaymentRange: {
        type: Number,
        require: true,
    },
    balanceFrequencyRange: {
        type: Number,
        require: true,
    },
    purchaseFrequencyRange: {
        type: Number,
        require: true,
    },
    oneoffPurchaseFrequencyRange: {
        type: Number,
        require: true,
    },
    purchaseIntanllmentsFrenquencyRange: {
        type: Number,
        require: true,
    },
    cashAdvandFrequencyRange:{
        type: Number,
        require: true,
    },
    prcFullPaymentRange: {
        type: Number,
        require: true,
    },
    purchaseTrxRange: {
        type: Number,
        require: true,
    },
    cashAdvanceTrxRange:{ 
        type: Number,
        require: true,
    },
    cluester: {
        type: Number,
        require: true,
    }
});

const Patient = mongoose.model("Patient", patientSchema);
module.exports = { Patient };