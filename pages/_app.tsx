import {AppProps} from "next/app";
import '../styles/globals.scss'
import Layout from "../components/Layout";
import Image from "next/image";
import logoA from "../public/image.png"
import Head from "next/head";


const MyApp = ({Component, pageProps}: AppProps) => (
    <Layout>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
        </Head>
        <main>
            <Component {...pageProps} />
        </main>
        <Image src={logoA}
               width={500}
               height={350}
               alt="preview"
               placeholder="blur"
        />
    </Layout>

)

export default MyApp
