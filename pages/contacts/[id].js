import Heading from "../../components/Heading";
import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";

export const getServerSideProps = async (context) => {   //ssr - server site rendering
   // console.log(context);
    const {id}  = context.params
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await response.json()

    if (!data) {                    //если нет данных то возвращает объект и next.js перекидывает на 404 ошибку
        return {
            notFound: true
        }
    }
    return {
        props: {contact: data}
    }
}

const Contact = ({contact}) => (
    <>
        <Head>
            <title>Contact</title>
        </Head>
        <ContactInfo contact={contact}/>

    </>

)

export default Contact
