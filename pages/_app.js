import App from "next/app"
import {ThemeProvider} from 'styled-components'
import GlobalStyle from "../components/GlobalStyle"
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
config.autoAddCss = false; 

const theme = {
    colors: {
        primary: '#0070f3',
    },
}

export default class MyApp extends App{
    render(){
        const {Component, pageProps} = this.props
        return(
           
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <Component {...pageProps} />
                <div className="linkContainer footer">
                    <Link href="https://github.com/carloseduardo1995">
                        <a>
                             <FontAwesomeIcon style={{fontSize:"35px"}} icon={faGithub}></FontAwesomeIcon>
                        </a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/cemenezesJunior">
                        <a>
                             <FontAwesomeIcon style={{fontSize:"35px"}} icon={faLinkedin}></FontAwesomeIcon>
                        </a>
                    </Link>
                    <Link href="mailto:carloseduardojunior@id.uff.br">
                        <a>
                             <FontAwesomeIcon style={{fontSize:"35px"}} icon={faEnvelope}></FontAwesomeIcon>
                        </a>
                    </Link>
            </div>
            </ThemeProvider>
            
        );
    }
}