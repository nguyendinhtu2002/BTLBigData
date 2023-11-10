document.addEventListener("DOMContentLoaded", function () {
    const age = document.getElementById("inputAge");
    const annual_income = document.getElementById("inputAnnualIncome");
    const spending_score = document.getElementById("inputSpending_score");
    const work = document.getElementById("work");
    const work_experience = document.getElementById("inputWordExperience");
    const family_size = document.getElementById("inputFamilySize");
    const resultParagraph = document.getElementById("result");
    const predictButton = document.getElementById("predictButton");
    var selectedValue;
    work.addEventListener("change", function () {
        selectedValue = work.value;
    });
    predictButton.addEventListener("click", async function (event) {
        event.preventDefault();
        // Collect form data
        const formData = {
            age: parseInt(age.value),
            annual_income: parseFloat(annual_income.value),
            spending_score: parseFloat(spending_score.value),
            work: selectedValue, 
            work_experience: parseFloat(work_experience.value),
            family_size: parseInt(family_size.value),
        };

        try {
            // Convert form data to JSON
            const jsonData = JSON.stringify(formData);

            // Send POST request to API
            const response = await fetch("http://127.0.0.1:5000/api/centroid-predict", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: jsonData,
            });

            if (response.ok) {
                const predictionResult = await response.json();
                resultParagraph.textContent  = `${predictionResult.data.clusteredFetures.name}: ${predictionResult.data.clusteredFetures.features}`
                resultParagraph.classList.add(`${predictionResult.data.clusteredFetures.color_text}`);
                // Handle the prediction result as needed
            } else {
                resultParagraph.textContent = "Prediction failed.";
            }
        } catch (error) {
            // resultParagraph.textContent = "An error occurred during prediction.";
            console.error("Prediction error:", error);
        }
    });
    
});
