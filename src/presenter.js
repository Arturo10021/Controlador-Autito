import {Auto} from "./Autito";

const comando = document.querySelector("#comando");
const form = document.querySelector("#comandos-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const auto = new Auto();
  const com = comando.value;
  auto.Inicializar(com);

  div.innerHTML = "<p>" + "Dimension: " + auto.maxX + "," + auto.maxY + "</p>" +
                  "<p>" + "Posicion Inicial: " + auto.iniX + "," + auto.iniY + auto.iniDirection + "</p>" +
                  "<p>" + "Posicion Final: " + auto.X + "," + auto.Y + auto.direction + "</p>";
});
