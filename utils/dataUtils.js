const minMaxScaling = (value, min, max) => {
  return (value - min) / (max - min);
};

const preprocessData = (data) => {
  const ranges = {
    annual_income: { min: 0, max: 189974  },
    spending_score: { min: 0, max: 100 },
    work_experience: { min: 0, max: 17 },
    family_size: { min: 1, max: 9 },
  };
  const preprocessedData = { ...data };

  for (const attribute in ranges) {
    if (preprocessedData.hasOwnProperty(attribute)) {
      preprocessedData[attribute] = minMaxScaling(
        preprocessedData[attribute],
        ranges[attribute].min,
        ranges[attribute].max
      );
    }
  }

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

  return preprocessedData;
};

module.exports = { preprocessData };
