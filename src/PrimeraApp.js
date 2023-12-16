//Funcional components > componentes como funcion
import React from "react";

const PrimeraApp = ( props ) => {

     const objeto = {
         name: "eze",
         age: 28,
         sex: "M"
     }

     console.log(props); //es esto lo que se esta mostrando en la consola

    // Se utiliza un paréntesis para indicar que todo lo que le sigue al mismo es un objeto.
    //De esta manera puedo retornar varias lineas, sino solamente retornaría la primera ya que interpreta un ";" al finalizar la misma.
    return (
        <div>
            <h1>{ props.saludo }</h1>
            <pre>{JSON.stringify(objeto)}</pre> 
            <p>Mi primera app</p>
        </div>
        //Nota: Este div se pone porque se debe retornar 1 solo objeto en un componente SIEMPRE. Tambien puedo usar un <> o fragment. Ampliar
    );
}

export default PrimeraApp;