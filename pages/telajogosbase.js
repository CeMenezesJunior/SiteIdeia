import Head from 'next/head'

export default function TelaJogosBase(){
    return(
        <div>
            <Head>
                <title>Jogos</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="descricao">
                <h4 style={{fontSize:"32px"}} >Tela jogos Base</h4>
            </div>
            <div style={{marginLeft:"30%"}}>
                <div className="miniclip-game-embed" data-game-name="quickfire-pool-instant" data-theme="5" data-width="550" data-height="900" data-language="pt"><a href="https://www.miniclip.com/games/quickfire-pool-instant/">Play Quick Fire Pool Instant</a></div>
                <script src="//static.miniclipcdn.com/js/game-embed.js"></script>
            </div>
            <div style={{margin:"10px 0px 30px 33%"}}>
                <p>
                    Nessa parte teria uma explicação sobre como funciona o jogo
                </p>
            </div>
            <div style={{margin:"10px 0px 30px 60%"}}>
                <a className="botaoPrincipal">Próximo nível</a>
            </div>
        </div>
    )
}