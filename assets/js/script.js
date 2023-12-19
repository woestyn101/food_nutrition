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
    var selectedHealthPreference = document.getElementById("healthDropdown").value;

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