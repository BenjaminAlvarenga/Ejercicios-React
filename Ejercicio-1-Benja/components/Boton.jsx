import React from "react";

const Boton = ({titulo, accion}) => {
    return (
        <div class="d-grid gap-2 d-md-block">
            <button onClick={accion} class="btn btn-primary" type="button">
                {titulo}</button>
        </div>
    )
}

const Popover = ({titulo, accion}) => {
    return(
        <button onClick={accion} type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here’s some amazing content. It’s very engaging. Right?">{titulo}</button>
    )
}

export default Boton