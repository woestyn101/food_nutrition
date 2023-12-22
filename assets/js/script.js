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

    for (const key in theIngredients ){
        //console.log(`${key}: ${theIngredients[key].text}`);
        console.log(theIngredients[key].text);
    }

    // getting instructions from recipe
    var theInstructions = objectData.hits[0].recipe.instructionLines;

    console.log(typeof(theInstructions));

    for (const key in theInstructions ){
       
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

theIngredients = data.hits[0].recipe.ingredients
    
displayIngredients(theIngredients);

function displayIngredients(theIngredientsR){
    
  ingredientsArray = [];
 
  console.log("match");
  for (const key in theIngredientsR ){
      //console.log(`${key}: ${theIngredients[key].text}`);
      console.log(theIngredientsR[key].text);
      ingredientsArray.push(theIngredientsR[key].text);
  }

  console.log(ingredientsArray);

  for (var i = 0; i < ingredientsArray.length; i++){
      var liE = document.createElement("li");
      liE.innerText = ingredientsArray[i];
      showIngredientList.appendChild(liE);
      
     }
 }
