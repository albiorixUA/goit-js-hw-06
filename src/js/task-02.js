const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const addIngredientsContainer = document.querySelector("#ingredients");
const addIngredients = (ingredients) => {
  return ingredients.map((ingredient) => {
    const elem = document.createElement("li");
    elem.classList.add("item");
    elem.textContent = ingredient;
    return elem;
  });
};
const elements = addIngredients(ingredients);
addIngredientsContainer.append(...elements);
