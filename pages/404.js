import {useEffect} from "react";
import {useRouter} from "next/router";
import Heading from "../components/Heading";
import styles from "../styles/404.module.scss"

const Error = () => {
    const router = useRouter(); //redirect to main
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [router])
    return (

        <div className={styles.wrapper}>
            <div>
                <Heading text='404'/>
                <Heading tag='h2' text='Error Page till.. 3 second redirected to main!'/>
            </div>
        </div>
    )
}
export default Error
