var showIngredientList = document.getElementById("showIngredientList");

var theIngredients;
var ingredientsArray;

var url =
  "https://api.edamam.com/api/recipes/v2?type=public&q=Chicken&app_id=d4007c46&app_key=910d9b26c4011ee69fc785d5f7c6b120";

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

    // get ingredients from Api
    var theIngredients = objectData.hits[0].recipe.ingredients;

    for (const key in theIngredients) {
      //console.log(`${key}: ${theIngredients[key].text}`);
      console.log(theIngredients[key].text);
    }

    //theIngredients = objectData.hits[0].recipe.ingredients

    displayIngredients(theIngredients);

    function displayIngredients(theIngredientsR) {
      ingredientsArray = [];

      console.log("match");
      for (const key in theIngredientsR) {
        //console.log(`${key}: ${theIngredients[key].text}`);
        console.log(theIngredientsR[key].text);
        ingredientsArray.push(theIngredientsR[key].text);
      }

      console.log(ingredientsArray);

      for (var i = 0; i < ingredientsArray.length; i++) {
        var liE = document.createElement("li");
        liE.innerText = ingredientsArray[i];
        showIngredientList.appendChild(liE);
      }
    }

    // getting instructions from recipe
    var theInstructions = objectData.hits[0].recipe.instructionLines;

    console.log(typeof theInstructions);

    for (const key in theInstructions) {
      console.log(theInstructions[key]);
    }
  });
// }


function setupPreferences() {
  // Diet Preference
  var savedDiet = localStorage.getItem("selectedDiet");
  var dietDropdown = document.getElementById("dietDropdown");

  if (savedDiet) {
    dietDropdown.value = savedDiet;
  }

  dietDropdown.addEventListener("change", function () {
    localStorage.setItem("selectedDiet", dietDropdown.value);
  });

  // Meal Type Preference
  var savedMealTypePreference = localStorage.getItem("selectedMealTypePreference");
  var mealTypeDropdown = document.getElementById("MealTypeDropdown");

  if (savedMealTypePreference) {
    mealTypeDropdown.value = savedMealTypePreference;
  }

  mealTypeDropdown.addEventListener("change", function () {
    localStorage.setItem("selectedMealTypePreference", mealTypeDropdown.value);
  });

  // Cuisine Preference
  var savedCuisineType = localStorage.getItem("selectedCuisineType");
  var cuisineDropdown = document.getElementById("cuisineDropdown");

  if (savedCuisineType) {
    cuisineDropdown.value = savedCuisineType;
  }

  cuisineDropdown.addEventListener("change", function () {
    localStorage.setItem("selectedCuisineType", cuisineDropdown.value);
  });

}

function buildApiUrl() {
  // Retrieve the saved preferences from local storage
  var savedDiet = localStorage.getItem("selectedDiet");
  var savedMealType = localStorage.getItem("selectedMealTypePreference");
  var savedCuisineType = localStorage.getItem("selectedCuisineType");

  // Construct the API URL with the retrieved preferences
  return `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=d4007c46&app_key=85bfb7e1ed3ea9ce64f383de10f21d71&mealType=${savedMealType}&Diet=${savedDiet}&cuisineType=${savedCuisineType}`;
}

// Call the setupPreferences function to set up the preferences on page load
setupPreferences();

// Example of how to use the buildApiUrl function
var apiUrl = buildApiUrl();
console.log(apiUrl); // Use the apiUrl in your API request
