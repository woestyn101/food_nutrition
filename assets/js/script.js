//ingredient variables

var showIngredientList = document.getElementById("showIngredientList");
var showIngredientList2 = document.getElementById("showIngredientList2");
var showIngredientList3 = document.getElementById("showIngredientList3");

// instructions variables 
var showInstructionsList = document.getElementById("showInstructionList");
var showInstructionsList2 = document.getElementById("showInstructionList2");
var showInstructionsList3 = document.getElementById("showInstructionList3");

// images variables from html
var showImage1 = document.getElementById("recipeImage01");
var showImage2 = document.getElementById("recipeImage02");
var showImage3 = document.getElementById("recipeImage03");

// setting ingredient & instructions var and array
//var theIngredients;
var ingredientsArray;
//var theInstructions;
var instructionsArray;

var lookupBtn = document.getElementById("lookupBtn");



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

    instructionsArray = [];

    for (const key in theInstructions) {
      console.log(theInstructions[key]);
      instructionsArray.push(theInstructions[key]);
    }
   console.log(instructionsArray);

   for (var i = 0; i < instructionsArray.length; i++) {
    var liE = document.createElement("li");
    liE.innerText = instructionsArray[i];
    showInstructionsList.appendChild(liE);
    
  }
   for (var i = 0; i < instructionsArray.length; i++) {
    var liE = document.createElement("li");
    liE.innerText = instructionsArray[i];
    showInstructionsList2.appendChild(liE);
    
  }
   for (var i = 0; i < instructionsArray.length; i++) {
    var liE = document.createElement("li");
    liE.innerText = instructionsArray[i];
    showInstructionsList3.appendChild(liE);
    
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


// Call the setupPreferences function to set up the preferences on page load
setupPreferences();

// Example of how to use the buildApiUrl function
var apiUrl = buildApiUrl();
console.log(apiUrl); // Use the apiUrl in your API request
