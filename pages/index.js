import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

function Title(props){
    return <h1 style={{fontSize:"50px",color:"blue"}}>{props.children}</h1>
}

export default function Home(props){
    return(
        <div>
            <header className="headerContainer">
                <img src={props.avatar_url}/>
                <Link href="/sobre">
                    <a>
                        <p style={{color:"#ff6a00;"}}>Sobre mim</p>
                    </a>
                </Link>
            </header>

            <section className="postsContainer">
                <h2>Repositórios Favoritos</h2>
                {
                    props.repos.map((project)=>{
                        return(
                            <article className="postContainer__post">
                                <a href="/">
                                    {project.repo}
                                </a>
                                <p>
                                    {project.description}
                                </p>
                            </article>
                        )
                        })
                }
            </section>
            <div className="linkContainer">
                    <Link href="https://github.com/carloseduardo1995">
                        <a>
                             <FontAwesomeIcon style={{fontSize:"35px"}} icon={faGithub}></FontAwesomeIcon>
                        </a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/cemenezesJunior">
                        <a>
                             <FontAwesomeIcon style={{fontSize:"35px"}} icon={faLinkedin}></FontAwesomeIcon>
                        </a>
                    </Link>
            </div>
        </div>
    )
}

export async function getStaticProps(){

    const githubResponse = await fetch('https://api.github.com/users/carloseduardo1995')
        .then(res=>res.json())

    const repos = await fetch('https://gh-pinned-repos.now.sh/?username=carloseduardo1995')
        .then(res=>res.json())

    return{
        props: {
            avatar_url: githubResponse.avatar_url,
            repos,
        }
    }
}