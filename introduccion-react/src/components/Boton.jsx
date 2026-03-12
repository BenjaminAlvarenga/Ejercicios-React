import React from "react";

const Boton = ({titulo, accion}) => {
    return (
        <button onClick={accion}>
            {titulo}
        </button>
    )
}

export default Boton