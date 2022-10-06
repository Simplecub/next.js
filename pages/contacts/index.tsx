import {FC} from "react";
import {GetStaticProps} from "next";
import Head from "next/head";
import Heading from "../../components/Heading";
import Link from "next/link";
import {contactType} from "../../types";

type contactsTypeProps = {
    contacts: [contactType] //каждый элемент массива описан типом contactType
}

export const getStaticProps:GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    if (!data) {                    //если нет данных то возвращает объект и next.js перекидывает на 404 ошибку
        return {
            notFound: true
        }
    }
    return {
        props: {contacts: data}
    }
}

const Contacts:FC<contactsTypeProps> = ({contacts}) => {
    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <Heading text="Contacts list:!" />
            <ul>
                {contacts && contacts.map(({id, name}) => (
                    <li key={id}>
                        <Link href={`/contacts/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Contacts
