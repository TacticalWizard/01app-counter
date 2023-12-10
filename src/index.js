import React from 'react';
import ReactDOM from "react-dom";

const saludo = <h1>hola mundano</h1>; //variable que crea elemento html
console.log(saludo); //si haces esto fijate que muestra la etiqueta h1 y sus propiedades. Es un elemento html creado por React

const divRoot = document.querySelector("#app"); //referencia al index.html

ReactDOM.render( saludo, divRoot);


