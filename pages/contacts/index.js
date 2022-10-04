import Head from "next/head";
import {useState, useEffect} from "react";
import Heading from "../../components/Heading";

const Contacts = () => {
    const [contacts, setContacts] = useState(null);
    useEffect(()=> {
        const fetchData = async () => {
const  response = await fetch ('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            setContacts(data)
        }
        fetchData()

    }, [])//ПУСТОЙ МАССИВ означает что эффект сработает один раз при загрузке компонента
    return (
    <>
        <Head>
            <title>Contacts</title>
        </Head>
    <Heading text="Contacts list:!"/>
        <ul>
            {contacts && contacts.map(({id, name, email}) => (
                <li key={id}><strong>{name}</strong> ({email})</li>
            ))}
        </ul>
    </>
    )
}

export default Contacts
