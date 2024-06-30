function generateRecipes(event) {
  event.preventDefault();

  new Typewriter("#recipes", {
    strings: "Banana Bread",
    autoStart: true,
    cursor: null,
    delay: 4,
  });
}
console.log("Generating recipes..");

let formElement = document.querySelector("#generate-recipes");
formElement.addEventListener("submit", generateRecipes);
