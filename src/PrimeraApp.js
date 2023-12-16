//Funcional components > componentes como funcion
import React from "react";
//Destructuring PrimeraApp. We no longer need to have the const *props* to call *saludo* property since the main component is sending the props.
const PrimeraApp = ({ saludo = "Hola mundo"/*We can add a default value in the case that no property is sent from the component*/}) => {

     const objeto = {
         name: "eze",
         age: 28,
         sex: "M"
     }

    // Se utiliza un paréntesis para indicar que todo lo que le sigue al mismo es un objeto.
    //De esta manera puedo retornar varias lineas, sino solamente retornaría la primera ya que interpreta un ";" al finalizar la misma.
    return (
        <div>
            <h1>{ saludo }</h1>
            <pre>{JSON.stringify(objeto)}</pre> 
            <p>Mi primera app</p>
        </div>
        //Nota: Este div se pone porque se debe retornar 1 solo objeto en un componente SIEMPRE. Tambien puedo usar un <> o fragment. Ampliar
    );
}

export default PrimeraApp;