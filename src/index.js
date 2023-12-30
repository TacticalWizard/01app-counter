import React from 'react'; 
import ReactDOM from "react-dom";
import CounterApp from './CounterApp';

import "./index.css"

const divRoot = document.querySelector("#app"); //referencia al index.html


ReactDOM.render( <CounterApp value = {15} />, divRoot);


