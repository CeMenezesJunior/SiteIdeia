import Link from 'next/link'
import Head from 'next/head'

export default function Sobre(){
    return(
        <div>
            <Head>
                <title>Sobre mim</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div style={{marginLeft:"20px"}}>
                <h1>
                    Este sou eu
                </h1>
                <Link href="/">
                        <a>
                            Voltar para a tela anterior
                        </a>
                </Link>
                <div className="descricao">
                    <h4>Características</h4>
                    <p>
                        - Idade: {calculaIdade()} anos<br/>
                        - Estudante do curso de ciencia da computação da <a href="http://www.uff.br/">UFF</a><br/>
                        - 10 meses de trabalho com o framework para desenvolvimento móvel <a href="https://dotnet.microsoft.com/apps/xamarin/xamarin-forms">Xamarin Forms</a> <br/>
                        - {calculaTempoSys()} meses de experiência com o desenvolvimento Outsystems<br/>
                        - Certificação Associate Reactive Developer que pode ser conferida <a href="https://drive.google.com/file/d/1YeHEq5kV-2E6rtBXuqoVNeDr_SziWYaL/view?usp=sharing">aqui</a><br/>
                        - Esse site está sendo feito com JavaScript e os frameworks Next JS e React<br/>
                        - Ele está no github com o nome de SiteIdeia e pode ser na <a href="/">tela principal</a> <br/>
                        
                    </p>
                </div>
            </div>
            
            <p className="biografia">
                
            </p>

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