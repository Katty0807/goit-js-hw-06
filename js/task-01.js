const categoriesEl = document.querySelectorAll('.item');
console.log( `Number of categories: ${categoriesEl.length}`);


categoriesEl.forEach( categoryEl => {
  const nameEl = categoryEl.firstElementChild;
  const categoryName = nameEl.innerText;
  const ulEl = categoryEl.lastElementChild;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${ulEl.childElementCount}`);
});

const list = document.querySelector('#categories');
const items = list.querySelectorAll('.item');
console.log(`В списке ${items.length} категории:`);
items.forEach(node => {
const h2 = node.querySelector('h2');
const nodeItems = node.querySelectorAll('li');
console.log(` - категория: ${h2.textContent} (количество элементов: ${nodeItems.length})`);
});