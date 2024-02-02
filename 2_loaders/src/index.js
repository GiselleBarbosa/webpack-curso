import "./styles/warning.css";

import Button from "./components/button.js";
import Image from "./components/image.js";
import Title from "./components/title.js";
import warning from "./templates/warning.html";

const title = new Title();
title.create("Primeira página");

const image = new Image();
image.insertImage();

const button = new Button();
button.create();

// Babel Spread
const obj = { a: 1, b: 2, c: 3, d: 4 };

let { a, b, ...teste } = obj;

console.log(a);
console.log(b);
console.log(teste);

// Importacao de HTML
const body = document.querySelector("body");
body.innerHTML += warning;
