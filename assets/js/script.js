var url =
  "https://api.edamam.com/api/recipes/v2?type=public&app_id=d4007c46&app_key=%2085bfb7e1ed3ea9ce64f383de10f21d71&diet=high-protein";
// function getApi(){
fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    //objectData.hits[0].recipe.image
    //objectData.hits[0].recipe.label
    //objectData.hits[0].recipe.ingredients
    //objectData.hits[0].recipe.instructionLines
    console.log(objectData.hits[0].recipe);
    console.log(objectData.hits[0].recipe.image);
    console.log(objectData.hits[0].recipe.label);
    console.log(objectData.hits[0].recipe.ingredients);
    console.log(objectData.hits[0].recipe.instructionLines);
    document.getElementById("data-output");
  });
// }
// Retrieve the saved diet selection from local storage
var savedDiet = localStorage.getItem("selectedDiet");

// Set the dropdown value to the saved diet, if available
if (savedDiet) {
  document.getElementById("dietDropdown").value = savedDiet;
}

function saveDietSelection() {
  var selectedDiet = document.getElementById("dietDropdown").value;

  // Save the selected diet to local storage
  localStorage.setItem("selectedDiet", selectedDiet);
}

// Retrieve the saved health selection from local storage
var savedHealthPreference = localStorage.getItem("selectedHealthPreference");

// Set the dropdown value to the saved health preference, if available
if (savedHealthPreference) {
  document.getElementById("healthDropdown").value = savedHealthPreference;
}

function saveHealthSelection() {
  var selectedHealthPreference =
    document.getElementById("healthDropdown").value;

  // Save the selected health preference to local storage
  localStorage.setItem("selectedHealthPreference", selectedHealthPreference);
}

// Retrieve the saved cuisine selection from local storage
var savedCuisineType = localStorage.getItem("selectedCuisineType");

// Set the dropdown value to the saved cuisine type, if available
if (savedCuisineType) {
  document.getElementById("cuisineDropdown").value = savedCuisineType;
}

function saveCuisineSelection() {
  var selectedCuisineType = document.getElementById("cuisineDropdown").value;

  // Save the selected cuisine type to local storage
  localStorage.setItem("selectedCuisineType", selectedCuisineType);
}
