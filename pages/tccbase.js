import Link from 'next/link'
import Head from 'next/head'
import YoutubeEmbed from '../components/YoutubeEmbed/YoutubeEmbed'

export default function Tccbase(){
    return(
        <div>
            <Head>
                <title>Base</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="descricao">
                <h4 style={{fontSize:"32px"}}>
                    Esse site tem como objetivo introduzir crianças ao mundo da programação<br/>
                    Essa tela terá um texto e um vídeo explicando o site 
                </h4>
                <p style={{fontSize:"25px"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div style={{marginBottom:"20px"}}>
                <YoutubeEmbed embedId="6aDafdXJWp0"/>
            </div>
            
            <div style={{margin:"10px 0px 30px 80%"}}>
                <Link href="/telajogosbase">
                    <a className="botaoPrincipal">Avançar</a>
                </Link>
                
            </div>
            
        </div>
    )
}