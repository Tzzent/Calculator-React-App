import React from "react";
import '../hojas-de-estilo/Pantalla.css'

function Pantalla(props) {
    return (
        <div className="input">{props.valor}</div>
    );
}


export default Pantalla;