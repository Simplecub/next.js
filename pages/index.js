import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Heading from "../components/Heading";

const Home = () => (
    <div className={styles.wrapper}>
        <Head>
            <title>Home</title>
        </Head>
        <Heading text='Hello!!'/>
    </div>
)

export default Home
