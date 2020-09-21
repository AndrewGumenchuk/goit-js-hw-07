const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsElem = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  return itemEl;
});

const ingredientsEl = document.querySelector('#ingredients');
ingredientsEl.append(...ingredientsElem);

console.log(ingredientsEl);
