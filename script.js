const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const form = document.getElementById("form");
const result = document.getElementById("result");
const buttonClear = document.getElementById("btn-clear");

function calculateBMI(weight, height) {
  return (weight / Math.pow(height / 100, 2)).toFixed(1);
}

function updateResult(bmi) {
  let message, color;

  if (bmi >= 30) {
    message = `Your BMI ${bmi} which You are Obesity`;
    color = "#ff4f4f";
  } else if (bmi >= 25 && bmi <= 29.9) {
    message = `Your BMI ${bmi} which You are Overweight`;
    color = "#ffff63";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    message = `Your BMI ${bmi} which You are Normal Weight`;
    color = "#3bca37";
  } else if (bmi <= 18.4) {
    message = `Your BMI ${bmi} which You are Under Weight`;
    color = "#a4a4a4";
  } else {
    message = "Please input weight and height first!";
    color = "grey";
  }

  result.textContent = message;
  result.style.borderColor = color;
}

function formSubmitHandler(e) {
  e.preventDefault();
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  if (!isNaN(weight) && !isNaN(height)) {
    const bmi = calculateBMI(weight, height);
    updateResult(bmi);
  } else {
    updateResult(null);
  }
}

function clearHandler() {
  heightInput.value = "";
  weightInput.value = "";
  result.textContent = "";
  result.style.borderColor = "grey";
}

form.addEventListener("submit", formSubmitHandler);
buttonClear.addEventListener("click", clearHandler);
