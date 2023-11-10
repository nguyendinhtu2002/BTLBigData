const  Customers  = require("../models/customerModel");

const getCustomers = async (req, res) => {
    try {
        const patients = await Customers.find();
        const patientString = patients.map(patient => {
            return `${patient.age},${patient.annual_income},${patient.spending_score},${patient.work_experience},${patient.family_size},${patient.profession_doctor},${patient.profession_engineer},${patient.profession_entertainment},${patient.profession_executive},${patient.profession_healthcare},${patient.profession_homemaker},${patient.profession_lawyer},${patient.profession_marketing}`;
        }).join('\n');
        res.type('text').send(patientString);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};



module.exports = { getCustomers };