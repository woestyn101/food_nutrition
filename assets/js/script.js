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

// variables for images labels
var recipe1 = document.getElementById("Recipe1");
var recipe2 = document.getElementById("Recipe2");
var recipe3 = document.getElementById("Recipe3");

//  variable instructions
var instructionLink1 = document.getElementById("instructionLink1");
var instructionLink2 = document.getElementById("instructionLink2");
var instructionLink3 = document.getElementById("instructionLink3");


// variable additional info
//time
var time1 = document.getElementById("time1");
var time2 = document.getElementById("time2");
var time3 = document.getElementById("time3");

// serving size
var serving1 = document.getElementById("serving1");
var serving2 = document.getElementById("serving2");
var serving3 = document.getElementById("serving3");

// calories
var calories1E = document.getElementById("calories1");
var calories2E = document.getElementById("calories2");
var calories3E = document.getElementById("calories3");


// setting ingredient & instructions var and array

//var theIngredients;
var ingredientsArray;

//var theInstructions;
var instructionsArray;
var lookupBtn = document.getElementById("lookupBtn");
  var savedDiet = localStorage.getItem("selectedDiet");
  var savedMealType = localStorage.getItem("selectedMealTypePreference");
  var savedCuisineType = localStorage.getItem("selectedCuisineType");

  var url = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=d4007c46&app_key=85bfb7e1ed3ea9ce64f383de10f21d71&mealType=${savedMealType}&dishType=${savedDiet}&cuisineType=${savedCuisineType}`;
 
// var url = "https://api.edamam.com/api/recipes/v2?type=public&q=Chicken&app_id=d4007c46&app_key=910d9b26c4011ee69fc785d5f7c6b120";

// function getApi(){
fetch(url)
  .then((data) => {
    return data.json();
    
  }).catch(err => {
    console.log(err.message)
  })
  .then((objectData) => {
    
    console.log(objectData);

    // getting calories from api
    var calories1 = objectData.hits[0].recipe.calories;
    var calories2 = objectData.hits[1].recipe.calories;
    var calories3 = objectData.hits[2].recipe.calories;
   
    
    document.getElementById("data-output");

    // outputting the recipe images

    showImage1.src = objectData.hits[0].recipe.image;
    showImage2.src = objectData.hits[1].recipe.image;
    showImage3.src = objectData.hits[2].recipe.image;

    // outputting the recipe names

    recipe1.textContent = objectData.hits[0].recipe.label ;
    recipe2.textContent = objectData.hits[1].recipe.label ;
    recipe3.textContent = objectData.hits[2].recipe.label ;

    // getting instructions url from api

    var thelink1 = objectData.hits[0].recipe.url;
    var thelink2 = objectData.hits[1].recipe.url;
    var thelink3 = objectData.hits[2].recipe.url;
    
    // outputting instruction link to html
    instructionLink1.innerHTML = "<a href='"+ thelink1 +"'>Link</a>";
    instructionLink2.innerHTML = "<a href='"+ thelink2 +"'>Link</a>";
    instructionLink3.innerHTML = "<a href='"+ thelink3 +"'>Link</a>";

     
    // getting totaltime of recipe and outputting to html through function
    checkTime(objectData.hits[0].recipe.totalTime, time1);
    checkTime(objectData.hits[1].recipe.totalTime, time2);
    checkTime(objectData.hits[2].recipe.totalTime, time3);

    //function to check if time is 0 and then output to html

    function checkTime(totalTime, output){
      if (totalTime == 0){
        output.textContent = "N/A";
      }else{
        output.textContent = totalTime;
      }
    }

    //outputting serving size to html

    serving1.textContent = objectData.hits[0].recipe.yield;
    serving2.textContent = objectData.hits[1].recipe.yield;
    serving3.textContent = objectData.hits[2].recipe.yield;

    //outputting calories to html

    calories1E.textContent = calories1.toFixed(2);
    calories2E.textContent = calories2.toFixed(2);
    calories3E.textContent = calories3.toFixed(2);


    // get ingredients from Api
    var theIngredients = objectData.hits[0].recipe.ingredients;
var theIngredients2 = objectData.hits[1].recipe.ingredients;
    var theIngredients3 = objectData.hits[2].recipe.ingredients;

    for (const key in theIngredients) {
      console.log(theIngredients[key].text);
    }

    for (const key in theIngredients2) {
      console.log(theIngredients2[key].text);
    }

    //theIngredients = objectData.hits[0].recipe.ingredients

    displayIngredients(theIngredients, showIngredientList);
    displayIngredients(theIngredients2, showIngredientList2);
    displayIngredients(theIngredients3, showIngredientList3);

    function displayIngredients(theIngredientsR, theList) {
      ingredientsArray = [];

      for (const key in theIngredientsR) {
        console.log(theIngredientsR[key].text);
        ingredientsArray.push(theIngredientsR[key].text);
      }

      console.log(ingredientsArray);

      for (var i = 0; i < ingredientsArray.length; i++) {
        var liE = document.createElement("li");
        liE.innerText = ingredientsArray[i];
        theList.appendChild(liE);
        
      }
      
    }
      
  
  });



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