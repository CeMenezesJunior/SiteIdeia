import Head from "next/head"
import Link from "next/link"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getStaticProps(){
    const posts = await prisma.post.findMany();
    for (var i=0;i<posts.length;i++){
        posts[i].createAt = JSON.parse(JSON.stringify(posts[i].createAt))
    }
    return{
        props:{
            posts,
        }
    }
}

export default function Blog(props){
    return(
        <div>
            <div className="postsContainer">
                <h4>Testes</h4>
                {
                    props.posts.map((postagens)=>{
                        return(
                            <article className="postsContainer__post">
                                <a href="/blog">
                                    {postagens.title}
                                </a>
                                <p>
                                    {postagens.except}
                                </p>
                            </article>
                        )
                    })
                }
            </div>
        </div>
    )
}
