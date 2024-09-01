import {Auto} from "./auto";

const comando = document.querySelector("#comando");
const form = document.querySelector("#comandos-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const auto = new Auto();
  const com = comando.value;
  auto.inicializar(com);

  div.innerHTML = "<p>" + mostrarDimencionX(x) + "," + mostrarDimencionY(y) + "</p>";
});
