function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const widget = document.querySelector(".widget");
widget.lastElementChild.addEventListener("click", ()=>{
  const valueColor = getRandomHexColor()
  document.body.style.backgroundColor= valueColor;
  widget.querySelector(".color").textContent = valueColor;
});