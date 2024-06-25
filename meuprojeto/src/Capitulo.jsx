import { useState } from "react";

export default function Capitulo(props) {
    const [like, setLike] = useState(0);
    const [mostrar, setMostrar] = useState(true);

    function handleIncrementarLike() {
        setLike(like + 1);
    }

    function handleMostrar() {
        setMostrar( !mostrar );
        console.log("Mostrar: " + mostrar);
    }

    return (
        <>
            <h2>{props.titulo}</h2>
            <button onClick={handleMostrar}>{ (mostrar)? "Esconder" : "Mostrar" }</button>
            <p>{(mostrar) ? props.conteudo : ""}</p>
            <button onClick={handleIncrementarLike}>Like: {like}</button>
        </>
    );
}