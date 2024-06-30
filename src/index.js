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

  let instructionsElement = document.querySelector("#generate-ingredients");
  let context =
    "You are a intelligent culinary assistant who specializes in creating recipes based on available ingredients. Your mission is to use the main ingredients provided by the user to create a quick and basic recipe. Make sure you incorporate all the key ingredients mentioned by yhe user. Generate the recipe in basic HTML and separate the ingredients to the recipe with a <br />. Every recipe must be formatted clearly and consistently, including a list of ingredients followed by a set of step-by-step instructions of the recipe. A recipe must start with the ingredients and then list according to numbered instructions. Sign the recipe with 'SheCodes AI' after <br /> and inside a <strong> element at the end of the recipe only. Please make sure to follow all the user instructions!";
  let prompt = `User Instructions: Create a recipe using the main ingredients provided. Here are the main ingredients: ${instructionsElement.value}`;
  let apiKey = "ec00aa08afab6385c60b468o5877e14t";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipes");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="blink">🥣 Generating a recipe with ${instructionsElement.value} </div>`;

  axios(apiURL).then(displayRecipes);
}

let formElement = document.querySelector("#generate-recipes");
formElement.addEventListener("submit", generateRecipes);
