import { useState } from "react";
import Link from "next/link";
import Head from "next/head";


export default function Home(props){
    return(
        <div>
            <Head>
                <title>Carlos Eduardo Menezes Junior</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header className="headerContainer">
                <img src="https://avatars.githubusercontent.com/u/46033513?v=4"/>
                <div>
                    <h3>Carlos Eduardo Menezes Junior</h3>
                    <Link href="/sobre">
                        <a style={{fontWeight:"bold"}}>
                            Sobre mim
                        </a>
                    </Link>
                </div>
                
            </header>
            
            <div className="conteudos">
                <div className="postsContainer">
                    <h4>Meus Repositórios Favoritos</h4>
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

export async function getStaticProps(){

    const repos = await fetch('https://gh-pinned-repos.now.sh/?username=CeMenezesJunior')
        .then(res=>res.json())

    return{
        props: {
            repos,
        }
    }
}