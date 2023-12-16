import React from 'react'; //Ahora que importamos un componente si se está utilizando React
import ReactDOM from "react-dom";
import PrimeraApp from "./PrimeraApp";

import "./index.css"

const divRoot = document.querySelector("#app"); //referencia al index.html


ReactDOM.render( <PrimeraApp saludo = 'Hola, soy goku' /> , divRoot);


