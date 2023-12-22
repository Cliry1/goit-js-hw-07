function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = document.querySelector("#controls input");
const boxes = document.querySelector("#boxes");
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
destroy.addEventListener("click", ()=>{
  const listBox = document.querySelectorAll('.list-box');
  listBox.forEach(elem => {
    elem.remove();
  });})
create.addEventListener("click", ()=>{ 
  let arr =[];
  const deletePrevius = document.querySelectorAll('.list-box');
  deletePrevius.forEach(elem => {
    elem.remove();
  });
  if(input.value>=parseInt(input.getAttribute("min")) && input.value<=parseInt(input.getAttribute("max"))){
    for(let i = 1;i<=input.value;i++){
      arr.push(`<div class="list-box" style="width:${20 + i * 10}px; height:${20 + i * 10}px; background-color:${getRandomHexColor()}"></div>`);
    }
    boxes.insertAdjacentHTML("beforeend", arr.join(""));


    const listBox = document.querySelectorAll('.list-box');
    listBox.forEach(listBox => {
      listBox.style.flexShrink = "0";
    });
  }

})

//стилізація
document.body.style.overflowX = "auto";

controls.style.display = "inline-flex";
controls.style.padding = "32px";
controls.style.backgroundColor = "#F6F6FE";
controls.style.marginBottom = "16px";
controls.style.borderRadius= "8px";
controls.style.gap = "10px";

boxes.style.display = "flex";
boxes.style.gap = "10px";
boxes.style.padding = "32px";
boxes.style.backgroundColor = "#F6F6FE";
boxes.style.borderRadius= "8px";

input.style.padding= "8px 72px";
input.style.display= "flex";
input.style.borderRadius= "8px";
input.style.height= "40px";
input.style.border= "1px solid #808080";
input.style.textAlign= "center";
input.style.fontSize= "16px";
input.style.lineHeight= "1.5";
input.style.fontFamily= "Montserrat";
input.style.color= "#2E2F42";


create.style.padding= "8px 16px";
create.style.borderRadius= "8px";
create.style.backgroundColor= "#4E75FF";
create.style.border= "none";
create.style.display= "flex";
create.style.justifyContent= "center";
create.style.alignItems= "center";
create.style.width= "120px";
create.style.fontSize= "16px";
create.style.fontWeight= "500";
create.style.lineHeight= "1.5";
create.style.fontFamily= "Montserrat";
create.style.color= "#FFF";

destroy.style.display= "flex";
destroy.style.justifyContent= "center";
destroy.style.alignItems= "center";
destroy.style.width= "120px";
destroy.style.borderRadius= "8px";
destroy.style.backgroundColor= "#FF4E4E";
destroy.style.border= "none";
destroy.style.padding= "8px 16px";
destroy.style.fontSize= "16px";
destroy.style.fontWeight= "500";
destroy.style.lineHeight= "1.5";
destroy.style.fontFamily= "Montserrat";
destroy.style.color= "#FFF";