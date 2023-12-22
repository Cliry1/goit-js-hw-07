const count = document.querySelectorAll("ul#categories li.item");
console.log("Numbers of categories: ", count.length);

count.forEach(elem=>{
  console.log("Category: ",elem.firstElementChild.textContent);
  console.log("Elements: ", elem.querySelectorAll("li").length);
})
