import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { PrismaClient } from "@prisma/client"


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
                    <div style={{marginLeft:"25px",marginTop:"10px"}}>
                        <Link href="/blog">
                            <a style={{fontWeight:"bold"}}>
                                Blog
                            </a>
                        </Link>
                    </div>
                </div>
                
            </header>
            
           
               
                <div className="postsContainer">
                    <h4>Alguns dos Meus Projetos</h4>
                    {
                        props.repos.map((project)=>{
                            return(
                                <article className="postsContainer__post">
                                    <a href={project.linkGitHub}>
                                        {project.titulo}
                                    </a>
                                    
                                    <p>
                                        {project.descricao}<br/>
                                    </p>
                                    {HasLink(project)}
                                </article>
                            )
                            })
                    }
                </div>
                
            
           
        </div>
    )
}

const prisma = new PrismaClient();

export async function getStaticProps(){

    const repos = await prisma.repositorio.findMany();

    return{
        props: {
            repos,
        }
    }
}
export function HasLink(props){
    if(props.linkSite){
        return <a href={props.linkSite}>Clique aqui</a>
    }
}