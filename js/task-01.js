const categoriesEl = document.querySelectorAll('.item');
console.log( `Number of categories: ${categoriesEl.length}`);


categoriesEl.forEach( categoryEl => {
  const nameEl = categoryEl.firstElementChild;
  const categoryName = nameEl.innerText;
  const ulEl = categoryEl.lastElementChild;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${ulEl.childElementCount}`);
});