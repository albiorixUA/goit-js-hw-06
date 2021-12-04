console.log(
  `Number of categories: ${document.querySelectorAll(".item").length}`
);

const findEl = document
  .querySelectorAll(".item")
  .forEach((elem) =>
    console.log(
      `Category: `,
      elem.firstElementChild.textContent,
      `Elements:`,
      elem.lastElementChild.children.length
    )
  );
