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
                    Página sobre mim
                </h1>
                <Link href="/">
                        <a>
                            Voltar para a tela anterior
                        </a>
                </Link>
                
            </div>
            
            <p className="biografia">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus nisi ac risus vehicula, eget volutpat elit tempor. Etiam euismod in purus nec pulvinar. Sed gravida hendrerit nulla in finibus. Etiam et condimentum tellus, quis sagittis neque. Vestibulum id pulvinar erat. Nunc non orci hendrerit, malesuada velit id, gravida tellus. Cras mollis nibh ac elit gravida ultricies. Duis arcu urna, rhoncus ac orci nec, lacinia feugiat erat. Mauris sollicitudin, turpis et vestibulum ultricies, erat sapien egestas tortor, quis dignissim nisl nisl a nisi. In suscipit feugiat arcu ut tincidunt. Phasellus eget nisl ut justo auctor imperdiet a in diam. Praesent non tortor viverra, varius purus ut, convallis sem. Aliquam sollicitudin ultrices semper. Nulla porta eu massa id euismod.

                Nulla ut magna nisl. Aliquam dictum, purus placerat convallis tempor, nibh dolor rutrum nisi, vehicula hendrerit nulla felis et nisl. Mauris convallis porttitor nibh. Proin pharetra dui nibh. Vestibulum quis facilisis dolor, id porttitor quam. Integer condimentum, leo a scelerisque dapibus, dolor libero scelerisque metus, quis pellentesque mauris ipsum nec felis. Nulla vel ex et neque aliquam porta. Ut sit amet metus tincidunt, venenatis sem ut, eleifend erat. Suspendisse dignissim metus ac tellus tincidunt, id blandit odio gravida. Nunc quis rutrum nibh. Pellentesque rhoncus felis nec scelerisque ullamcorper. Donec condimentum venenatis tellus sit amet molestie. Fusce dui nisi, pellentesque vitae tellus in, suscipit interdum urna. Cras rhoncus leo eget egestas fringilla. Donec lobortis, ex non sagittis porta, metus tortor efficitur erat, a venenatis nisl odio ut neque. Nam diam tellus, auctor id euismod eget, gravida mollis dolor.

                Fusce vehicula libero neque, eget varius arcu feugiat ut. Sed libero enim, rutrum eget erat quis, elementum faucibus arcu. Nam sit amet nibh sit amet metus efficitur rutrum. Vestibulum porttitor dolor vitae fringilla euismod. Suspendisse vestibulum nunc et odio blandit, eget sagittis lacus pulvinar. Integer eu consequat turpis. Quisque ultrices sapien faucibus ipsum consequat, vitae vehicula nibh elementum. Morbi fermentum diam est, et sagittis lorem tincidunt bibendum. Etiam vitae accumsan odio. Vivamus cursus enim eu nisi auctor cursus. Nullam et tortor sit amet nulla feugiat venenatis in et mi. Nam sit amet mauris ultricies nunc tempus elementum sit amet nec neque. Nunc gravida quam leo, vel aliquam velit volutpat in.

                Integer malesuada erat at odio rutrum eleifend. Aliquam gravida, lacus vitae dictum eleifend, lectus mi rutrum libero, sit amet fringilla purus massa et sem. Sed porttitor est id feugiat tincidunt. Morbi ultrices rutrum tincidunt. Nullam vel enim a ex mollis accumsan quis ornare elit. Nullam pellentesque, magna finibus porta faucibus, justo arcu viverra lacus, id consequat purus orci a velit. Sed vulputate sagittis dolor ac ultrices. Integer sodales lectus ut libero suscipit bibendum. Nunc odio nisi, pulvinar eget vestibulum quis, semper scelerisque leo. Praesent ac malesuada elit. Phasellus fringilla egestas lacus quis aliquet.

                Ut feugiat tortor vel felis commodo lobortis. In condimentum accumsan faucibus. Mauris semper augue vel dignissim placerat. Proin vestibulum id turpis vel tempor. Duis venenatis augue enim, eu finibus lacus semper sed. Morbi porttitor lacus nibh, imperdiet rhoncus ex viverra vitae. Fusce interdum erat ac libero scelerisque suscipit. Praesent ipsum justo, vulputate nec erat vitae, fringilla molestie eros. Sed eu elementum neque, nec finibus mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras viverra diam in est vehicula faucibus. Praesent vitae elit viverra, placerat lectus eget, fringilla est. Donec commodo ligula vitae malesuada molestie.

            </p>
            
        </div>

       
    )
    
}