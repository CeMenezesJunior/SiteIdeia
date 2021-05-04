import Head from "next/head"
import YoutubeEmbed from '../components/YoutubeEmbed/YoutubeEmbed'

export default function Exemplo(){
    return(
        <div>
            <Head>
                <title>Exemplo</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div>
                <h1 className="textcenter">
                    Titulo
                </h1>
                <h3>
                    Subtitulo
                </h3>
            </div>
            <div className="card">
                <img src="https://s2.glbimg.com/LD50A6GeBAty7v8tjZKg-TXvmO8=/0x0:2952x2049/984x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2014/10/24/imac_3q.jpg"/>
                <div className="card-body">
                    <h5 className="card-title">Teste</h5>
                    <p className="card-body">Esse é um teste de bootstrap</p>
                    <a href="#" className="btn btn-primary">Clique</a>
                </div>
            </div>
            <div>
                <p>
                    Texto 
                    <YoutubeEmbed embedId="KFZyhnVwpR0"/>
                    Texto
                </p>
            </div>
            
        </div>
    )
}