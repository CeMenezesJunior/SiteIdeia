import { useState } from "react";
import Link from "next/link";
import Head from "next/head";


export default function Home(props){
    return(
        <div>
            <Head>
                <title>Carlos Eduardo Menezes Junior</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/46033513?v=4"/>
            </Head>
            <header className="headerContainer">
                <img
                    src="https://avatars.githubusercontent.com/u/46033513?v=4"
                />
                <div>
                    <h3>Carlos Eduardo Menezes Junior</h3>
                    <h4 style={{marginLeft:"85px"}}>Desenvolvedor</h4>
                    <Link href="/sobre">
                        <a style={{fontWeight:"bold"}}>
                            Sobre mim
                        </a>
                    </Link>
                </div>
                
            </header>
            
            <div className="conteudos">
                <div className="descricao">
                    <h4>Características</h4>
                    <p>
                        - Idade: {calculaIdade()} anos<br/>
                        - Estudante do curso de ciencia da computação da <a href="http://www.uff.br/">UFF</a><br/>
                        - 10 meses de trabalho com o framework para desenvolvimento móvel <a href="https://dotnet.microsoft.com/apps/xamarin/xamarin-forms">Xamarin Forms</a> <br/>
                        - {calculaTempoSys()} meses de experiência com o desenvolvimento Outsystems<br/>
                        - Certificação Associate Reactive Developer que pode ser conferida <a href="https://drive.google.com/file/d/1YeHEq5kV-2E6rtBXuqoVNeDr_SziWYaL/view?usp=sharing">aqui</a>
                    </p>
                </div>
                <div className="postsContainer">
                    <h4>Alguns dos Meus Projetos</h4>
                    {
                        props.repos.map((project)=>{
                            return(
                                <article className="postsContainer__post">
                                    <a href={"https://github.com/CeMenezesJunior/"+project.repo}>
                                        {project.repo}
                                    </a>
                                    <p>
                                        {project.description}
                                    </p>
                                </article>
                            )
                            })
                    }
                </div>
                
            </div>
           
        </div>
    )
}

export function calculaIdade(){
    var nascimento = new Date("1995-07-07T00:00:00");
    var diffIdade = Date.now() - nascimento.getTime();
    var Idade = new Date(diffIdade);
    return Math.abs(Idade.getUTCFullYear()-1970);
}

export function calculaTempoSys(){
    var contratado = new Date("2020-11-02T00:00:00");
    var diffTempo = Date.now() - contratado.getTime();
    var meses = new Date(diffTempo);
    return meses.getUTCMonth();
}

export async function getStaticProps(){

    const repos = await fetch('https://gh-pinned-repos.now.sh/?username=CeMenezesJunior')
        .then(res=>res.json())

    return{
        props: {
            repos,
        }
    }
}