import App from "next/app"
import {ThemeProvider} from 'styled-components'
import GlobalStyle from "../components/GlobalStyle"
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";
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
            <>
            <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <Component {...pageProps} />
            </ThemeProvider>
            </>
        );
    }
}