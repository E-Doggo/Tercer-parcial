import sumar from "./sumador";

const texto = document.querySelector("#publicacion");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-ul");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML += "<li>" + texto.value + "</li>";
});
