import React from 'react'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient;

export async function getStaticPaths() {
    return{
        paths:[{params:{id:"1"}},{params:{id:"2"}},{params:{id:"3"}}],
        fallback:false
    }

}

export async function getStaticProps(context) {
    const postCerto = await prisma.post.findFirst({
        where: {
            id: Number(context.params.id)
        }
    });
    postCerto.createAt = JSON.parse(JSON.stringify(postCerto.createAt))
    return {
        props: {
            postCerto,
        }
    }
}

export default function PostPage(props) {
    return (
        <div>
            {
                <div>
                    <h4>
                        {props.postCerto.title}
                    </h4>
                    <p>
                        {props.postCerto.text}
                    </p>
                    <p>
                        {props.postCerto.except}
                    </p>
                </div>
            }
        </div>
    )
}