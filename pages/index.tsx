import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Heading from "../components/Heading";
import Socials from "../components/Socials";

export const getStaticProps = async () => {
    try {
        const response = await fetch(`${process.env.API_HOST}/socials/`)
        const data = await response.json()
console.log(data)
        if (!data) {                    //если нет данных то возвращает объект и next.js перекидывает на 404 ошибку
            return {
                notFound: true
            }
        }
        return {
            props: {socials: data}
        }
    } catch {
        return {
            props: {socials: null}
        }
    }
}

const Home = ({socials}) => (
    <div className={styles.wrapper}>
        <Head>
            <title>Home</title>
        </Head>
        <Heading text="Hello!! " tag="h1"/>
        <Socials socials={socials}/>
    </div>
)

export default Home
