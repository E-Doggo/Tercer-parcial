
const texto = document.querySelector("#publicacion");
const form = document.querySelector("#sumar-form");
const ul = document.querySelector("#resultado-ul");
const div = document.querySelector("#resultado-div");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  if(texto.value != ""){
    ul.innerHTML += "<li>" + texto.value + "</li>";

  }
  else{
    div.innerHTML = "No se puede ingresar un post sin texto";    
  }
});
