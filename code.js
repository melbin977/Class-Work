// Get the form element by its id
var form = document.getElementById("calorie-form");

// Add an event listener to the form when it is submitted
form.addEventListener("submit", function(event) {
  
  // Prevent the default action of the form
  event.preventDefault();
  
  // Get the values of the input elements by their ids
  var gender = document.getElementById("gender").value;
  var age = document.getElementById("age").value;
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
  var activity = document.getElementById("activity").value;
  
  // Convert the values to numbers using parseFloat()
  age = parseFloat(age);
  height = parseFloat(height);
  weight = parseFloat(weight);
  activity = parseFloat(activity);
  
  // Declare a variable to store the calories
  var calories;
  
  // Check the gender and apply the appropriate formula
  if (gender == "male") {
    // For male: BMR = 10 * [Weight in kg] + 6.25 * [Height in cm] - 5 * [Age in years] + 5
    calories = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    
    // Multiply by the activity factor
    calories = calories * activity;
    
    // Round to the nearest integer
    calories = Math.round(calories);
    
    // Display the result
    alert("Your daily calorie intake is " + calories + " calories.");
    
  } else if (gender == "female") {
    // For female: BMR = 10 * [Weight in kg] + 6.25 * [Height in cm] - 5 * [Age in years] - 161
    calories = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    
    // Multiply by the activity factor
    calories = calories * activity;
    
    // Round to the nearest integer
    calories = Math.round(calories);
    
    // Display the result
    alert("Your daily calorie intake is " + calories + " calories.");
    
  } else {
    // Invalid gender
    alert("Please select a valid gender.");
  }
  
});
