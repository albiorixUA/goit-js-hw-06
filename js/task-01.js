console.log(
  `Number of categories: ${document.querySelectorAll(".item").length}`
);

const findEl = document.querySelectorAll(".item");
console.log(`Category: ${findEl[0].children[0].textContent}`);
console.log(`Elements: ${findEl[0].children[1].childElementCount}`);
console.log(`Category: ${findEl[1].children[0].textContent}`);
console.log(`Elements: ${findEl[1].children[1].childElementCount}`);
console.log(`Category: ${findEl[2].children[0].textContent}`);
console.log(`Elements: ${findEl[2].children[1].childElementCount}`);

