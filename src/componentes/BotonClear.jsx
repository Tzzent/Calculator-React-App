import React from "react";
import '../hojas-de-estilo/BotonClear.css';


function BotonClear(props) {
    return (
        <button className="boton-clear" onClick={props.manejarClic}>Clear</button>
    );
}

export default BotonClear;