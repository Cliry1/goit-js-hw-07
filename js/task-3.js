const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const h1 = document.querySelector("body h1");
h1.classList.add("title-task3")

input.addEventListener("input", (event) =>{output.textContent=event.currentTarget.value;
if(event.currentTarget.value.trim() ==""){output.textContent="Anonymous"}});
