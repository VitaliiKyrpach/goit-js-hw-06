const listItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${listItem.length}`);
listItem.forEach((item) => {
  const firstListItem = item.firstElementChild.textContent;
  console.log(`Category: ${firstListItem}`);
  const lastlistItem = item.lastElementChild;
  console.log(`Elements: ${lastlistItem.children.length}`);
});
