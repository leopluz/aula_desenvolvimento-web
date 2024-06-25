import Capitulo from './Capitulo';
import { useState } from 'react';

const capitulos = [
    { titulo: "Introdução bacana", conteudo: "Conteúdo bacana" },
    { titulo: "Desenvolvimento legal", conteudo: "Conteúdo legal" },
    { titulo: "Conclusão supimpa", conteudo: "Conteúdo supimpa" }
];

export default function Livro(props) {
    const [curtida, setCurtida] = useState(0);

    function handleCurtida() {
        setCurtida(curtida + 1);
    }

    return (
        <>
            <h1>{props.titulo}</h1>
            <button onClick={handleCurtida}>Curtidas: {curtida}</button>

            {
                capitulos.map((capitulo) => {
                    return (
                        <Capitulo titulo={capitulo.titulo} conteudo={capitulo.conteudo} />
                    );
                })
            }
        </>
    );
}