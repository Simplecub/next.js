import {useRouter} from "next/router";
import styles from "../styles/Navbar.module.scss"
import Link from "next/link";
import Image from "next/image";
import {FC} from "react";

const navigation = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Posts', path: '/posts' },
    { id: 3, title: 'Contacts', path: '/contacts' },
];

const Navbar:FC = () => {
    const {pathname} = useRouter() //чтобы подсвечивалась ссылка внизу
    return (
        <nav className={styles.nav}>
            <div className={styles.nav}>
                <Image src="/logob.svg" width={60} height={30} alt="Something"/>

            </div>
            <div className={styles.logo}>
                {navigation.map(({id, title, path}) =>(
                    <Link key={id} href={path}>
                        <a className={pathname === path ? styles.active : null}>{title}</a></Link>
                ))}

            </div>
        </nav>
    )
}


export default Navbar

