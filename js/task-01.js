const listItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${listItem.length}`);
const children = listItem.forEach((item) => {
  const firstListItem = item.firstElementChild.textContent;
  console.dir(`Category: ${firstListItem}`);
  const lastlistItem = item.lastElementChild;
  console.dir(`Elements: ${lastlistItem.children.length}`);
});
