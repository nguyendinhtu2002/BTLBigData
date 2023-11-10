const minMaxScaling = (value, min, max) => {
  return (value - min) / (max - min);
};

const preprocessData = (data) => {
  const preprocessedData = { ...data };

  switch (preprocessedData.work) {
    case "Healthcare":
      preprocessedData.profession_healthcare = 1;
      break;
    case "Doctor":
      preprocessedData.profession_doctor = 1;
      break;
    case "Engineer":
      preprocessedData.profession_engineer = 1;
      break;
    case "Entertainment":
      preprocessedData.profession_entertainment = 1;
      break;
    case "Executive":
      preprocessedData.profession_executive = 1;
      break;
    case "Homemaker":
      preprocessedData.profession_homemaker = 1;
      break;
    case "Lawyer":
      preprocessedData.profession_lawyer = 1;
      break;
    case "Marketing":
      preprocessedData.profession_marketing = 1;
      break;
    default:
      break;
  }
  if (
    preprocessedData.annual_income >= 0 &&
    preprocessedData.annual_income <= 20000
  ) {
    preprocessedData.annual_income = 1;
  } else if (
    preprocessedData.annual_income > 20000 &&
    preprocessedData.annual_income <= 40000
  ) {
    preprocessedData.annual_income = 2;
  } else if (
    preprocessedData.annual_income > 40000 &&
    preprocessedData.annual_income <= 60000
  ) {
    preprocessedData.annual_income = 3;
  } else if (
    preprocessedData.annual_income > 60000 &&
    preprocessedData.annual_income <= 80000
  ) {
    preprocessedData.annual_income = 4;
  } else if (
    preprocessedData.annual_income > 80000 &&
    preprocessedData.annual_income <= 100000
  ) {
    preprocessedData.annual_income = 5;
  } else if (
    preprocessedData.annual_income > 100000 &&
    preprocessedData.annual_income <= 120000
  ) {
    preprocessedData.annual_income = 6;
  } else if (
    preprocessedData.annual_income > 120000 &&
    preprocessedData.annual_income <= 140000
  ) {
    preprocessedData.annual_income = 7;
  } else if (
    preprocessedData.annual_income > 140000 &&
    preprocessedData.annual_income <= 160000
  ) {
    preprocessedData.annual_income = 8;
  } else if (
    preprocessedData.annual_income > 160000 &&
    preprocessedData.annual_income <= 180000
  ) {
    preprocessedData.annual_income = 9;
  } else if (
    preprocessedData.annual_income > 180000 &&
    preprocessedData.annual_income <= 200000
  ) {
    preprocessedData.annual_income = 10;
  } else if (preprocessedData.annual_income > 20000) {
    preprocessedData.annual_income = 11;
  }

  return preprocessedData;
};

module.exports = { preprocessData };
