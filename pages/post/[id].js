import { faPooStorm } from '@fortawesome/free-solid-svg-icons';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient;

export async function getServerSideProps({ params }) {
    const postCerto = await prisma.post.findFirst({
        where: {
            id: Number(params.id)
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
                        {props.postCerto.except}
                    </p>
                </div>
            }
        </div>
    )
}