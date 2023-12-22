const form = document.querySelector(".login-form");
const obj={};

form.addEventListener("submit", (event)=>{event.preventDefault();
  if([...form.elements].some(elem=>elem.value.trim()=="" && elem.tagName==="INPUT"))
  alert('All form fields must be filled in');
  if(form.elements.email.value.trim()!="" && form.elements.password.value.trim()!=""){
  obj.email=form.elements.email.value;
  obj.password=form.elements.password.value;
  console.log(obj);
  form.reset();
};})

