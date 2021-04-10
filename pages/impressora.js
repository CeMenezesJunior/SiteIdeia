import Link from 'next/link'
import Head from 'next/head'
import  YoutubeEmbed  from '../components/YoutubeEmbed/YoutubeEmbed'

export default function Impressora(){
    return(
        <div>
            <Head>
                <title>Impressora</title>
            </Head>
            <div className="postsContainer">
                <h3>Dados da impressora</h3>
                <div className="postsContainer__post">
                    <h3>Comprar 4 tintas</h3>
                    <p> - 4x54,90 = R$ 219,60</p>
                    <Link href="https://store.hp.com/br-pt/default/catalogsearch/result/?q=hp+670&utm_source=google&utm_medium=cpc&utm_campaign=HP-Mktg_BR_BRA_Print_Supplies_Ink_OPEX_Google_All_SEM_ROAS_EXP&targetid=kwd-305267186828&utm_term=%2Bhp%20%2B670&matchtype=b&adid=491641673209&addisttype=g&gclid=Cj0KCQjwmcWDBhCOARIsALgJ2QdKLz-Gb6_8snBHoFhenZvizjfbbIx76NAdeJUGqEuLYkYMeOp77DcaAl9vEALw_wcB&gclsrc=aw.ds">
                        <a>
                            Clique aqui para comprar
                        </a>
                    </Link>
                    <h3>Comprar uma nova impressora</h3>
                    <p> 
                        - HP DeskJet Ink Advantage 2774 Wireless <br/> R$ 419,00 <br/>
                        - Tintas 2x54,90 = R$ 109,80 <br/>
                    </p>
                    <Link href="https://www.amazon.com.br/IMPRESSORA-DESKJET-INK-ADVANTAGE-2376/dp/B08CM8BB1M">
                        <a>
                            Clique para comprar a impressora
                        </a>
                    </Link>
                </div>              
            </div>
            <YoutubeEmbed  embedId="xf_Gn51gmek"/>
        </div>
    )
}