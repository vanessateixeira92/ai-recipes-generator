function displayRecipes(response) {
  new Typewriter("#recipes", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 4,
  });
}

function generateRecipes(event) {
  event.preventDefault();

  let recipeElement = document.querySelector("#generate-ingredients");
  let context =
    "You are a intelligent culinary assistant who specializes in creating recipes based on available ingredients. Your mission is to use the main ingredients provided by the user to create a quick and basic recipe. Make sure you incorporate all the key ingredients mentioned by yhe user. Generate the recipe in basic HTML and separate the ingredients to the recipe with a <br />.  Do not include a title or an introduction. Always responds with the same format. Sign the recipe with 'SheCodes AI' after <br /> and inside a <strong> element at the end of the recipe only. Please make sure to follow all the user instructions!";
  let prompt = `User Instructions: Create a recipe using the main ingredients provided. Here are the main ingredients: ${recipeElement.value}`;
  let apiKey = "ec00aa08afab6385c60b468o5877e14t";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating recipes..");
  console.log(`Context: ${context}`);
  console.log(`Prompt: ${prompt}`);

  axios(apiURL).then(displayRecipes);
}

let formElement = document.querySelector("#generate-recipes");
formElement.addEventListener("submit", generateRecipes);
