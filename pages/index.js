import { useState } from "react";

function CapsLock(props){
    const textoInserido = props.children;
    const textoEmCapsLock = textoInserido.toUpperCase();
    return <div>{textoEmCapsLock}</div>
}

function Programa(){
    const [valor, setValor] = useState("teste")
    function mudarValor(){
        setValor("Esse valor foi alterado")
    }
    
    return(
        <div className="ProgramaTeste">
            <div>{valor}</div>
            <button onClick={mudarValor}>Muda valor</button>
        </div>
    )
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
            <Programa/>
            <Contador/>
            <CapsLock>Seja feliz</CapsLock>
        </div>
    )
}

export default Home