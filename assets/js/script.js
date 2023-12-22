var showIngredientList = document.getElementById("showIngredientList");
var showIngredientList2 = document.getElementById("showIngredientList2");
var showIngredientList3 = document.getElementById("showIngredientList3");
var showImage1 = document.getElementById("recipeImage01");
var showImage2 = document.getElementById("recipeImage02");
var showImage3 = document.getElementById("recipeImage03");

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

    showImage1.src = objectData.hits[0].recipe.image;
    showImage2.src = objectData.hits[0].recipe.image;
    showImage3.src = objectData.hits[0].recipe.image;

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

      for (var i = 0; i < ingredientsArray.length; i++) {
        var liE = document.createElement("li");
        liE.innerText = ingredientsArray[i];
        showIngredientList2.appendChild(liE);
        
      }

      for (var i = 0; i < ingredientsArray.length; i++) {
        var liE = document.createElement("li");
        liE.innerText = ingredientsArray[i];
        showIngredientList3.appendChild(liE);
        
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
var savedMealTypePreference = localStorage.getItem(
  "selectedMealTypePreference"
);

// Set the dropdown value to the saved health preference, if available
if (savedMealTypePreference) {
  document.getElementById("MealTypeDropdown").value = savedMealTypePreference;
}

function saveMealTypeSelection() {
  var selectedMealTypePreference =
    document.getElementById("MealTypeDropdown").value;

  // Save the selected health preference to local storage
  localStorage.setItem(
    "selectedMealTypePreference",
    selectedMealTypePreference
  );
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
