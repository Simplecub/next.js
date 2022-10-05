import {FC} from "react";
import {GetServerSideProps} from "next";
import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";
import {contactType} from "../../types";

type contactTypeProps = {
    contact: contactType
}
export const getServerSideProps:GetServerSideProps = async (context) => {   //ssr - server side rendering
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

const Contact:FC<contactTypeProps> = ({contact}) => (
    <>
        <Head>
            <title>Contact</title>
        </Head>
        <ContactInfo contact={contact}/>

    </>

)

export default Contact
