/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generadorexcusas();
  });

  console.log("Hello Juancho from the console! ");
};

let generadorexcusas = () => {
  let pronoun = ["Un", "El"];
  let subject = ["cartero", "gato", "perro", "conductor", "portero"];
  let action = ["tomo", "lanzo", "esconido", "me robo", "mordio"];
  let possetion = ["la tarea", "el zapato", "las llaves", "la bicicleta"];
  let where = ["en la calle", "en mi casa", "en el camino a casa"];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjtIndx = Math.floor(Math.random() * subject.length);
  let actionindx = Math.floor(Math.random() * action.length);
  let possetionindex = Math.floor(Math.random() * possetion.length);
  let whereindex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subjtIndx] +
    " " +
    action[actionindx] +
    " " +
    possetion[possetionindex] +
    " " +
    where[whereindex]
  );
};
