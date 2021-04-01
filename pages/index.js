import { useState } from "react";

function CapsLock(props){
    const textoInserido = props.children;
    const textoEmCapsLock = textoInserido.toUpperCase();
    return <div>{textoEmCapsLock}</div>
}


function Contador(){
    const [contador, setContador] = useState(1)
    function adicionarContador(){
        setContador(contador + 1);
        console.log("Adicionou");
    }
    return(
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adiciona</button>
        </div>
    )
}

function Home(){
    return (
        <div className="TelaPrincipal">
            <h3 style={{textAlign:"center"}}>Teste</h3>
            <CapsLock>Teste Carlos</CapsLock>
            <Contador/>
            <CapsLock>Seja feliz</CapsLock>
        </div>
    )
}

export default Home