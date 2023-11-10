const calculateDistance = async (point1, point2) => {
    const distance = Math.sqrt(
        Math.pow(point1.age - point2.age, 2) +
        Math.pow(point1.spending_score - point2.spending_score, 2) +
        Math.pow(point1.work_experience - point2.work_experience, 2) +
        Math.pow(point1.family_size - point2.family_size, 2) +
        Math.pow(point1.profession_doctor - point2.profession_doctor, 2) +
        Math.pow(point1.profession_engineer - point2.profession_engineer, 2) +
        Math.pow(point1.profession_entertainment - point2.profession_entertainment, 2) +
        Math.pow(point1.profession_executive - point2.profession_executive, 2) +
        Math.pow(point1.profession_healthcare - point2.profession_healthcare, 2) +
        Math.pow(point1.profession_homemaker - point2.profession_homemaker, 2) +
        Math.pow(point1.profession_lawyer - point2.profession_lawyer, 2) +
        Math.pow(point1.profession_marketing - point2.profession_marketing, 2) +
        Math.pow(point1.annual_income - point2.annual_income, 2)

    );
    return distance;
};

const getClusterFeatures = async (centroid, centroidData) => {
   
    if (centroid === centroidData[0]) {
        return {
            name: "Già",
            features: "Độ tuổi trung bình cao, điểm chi tiêu trung bình, có mức thu nhập cao, kinh nghiệm làm việc thấp",
            color_text: "text-green-600"
        };
    } else if (centroid === centroidData[2]) {
        return {
            name: "Trẻ",
            features: "Độ tuổi trung bình thấp, điểm chi tiêu trung bình cao, có mức thu nhập trung bình, kinh nghiệm làm việc cao",
            color_text: "text-green-600"
        };
    }
    else if (centroid === centroidData[1]) {
        return {
            name: "Trung Niên",
            features: "Độ tuổi trung bình, điểm chi tiêu trung bình thấp, có mức thu nhập thấp, kinh nghiệm làm việc trung bình",
            color_text: "text-green-600"
        };
    }
};


module.exports = { calculateDistance , getClusterFeatures};