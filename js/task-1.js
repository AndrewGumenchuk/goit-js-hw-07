// Виводить список з ідентифікатором #categories

const ulEl = document.querySelector('#categories');
console.log(ulEl);

//Виводить кількість елементів li.item

const itemEl = ulEl.querySelectorAll('.item');
console.log('Кількість категорій в списку:', itemEl.length);

//Виводить текст заголовка  категорій (h2) і кількість вложенних внього елементів li

itemEl.forEach(element => {
  const titleEl = element.querySelector('h2');
  const liEl = element.querySelectorAll('li');
  console.log(`Категорія: ${titleEl.textContent}`);
  console.log(`Кількість елементів:${liEl.length}`);
});
