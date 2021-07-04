const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listEl = document.querySelector("#ingredients");

const createListItems = (items) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = items;
  return itemEl;
};

const allItems = ingredients.map((items) => createListItems(items));
// console.log(allItems);

listEl.append(...allItems);
// console.log(listEl);
