import Link from 'next/link'

function Title(props){
    return <h1 style={{fontSize:"50px",color:"blue"}}>{props.children}</h1>
}

export default function Sobre(){
    return(
        <div>
            <header>
                <Title>
                    Pagina sobre 
                </Title>
            </header>
            <Link href="/">
                <a>
                    Link para a home
                </a>
            </Link>
            
        </div>

       
    )
    
}