import Head from 'next/head'
import styles from './Header.module.css'
import { useCookies } from 'react-cookie'
import { Cookies } from 'react-cookie'
import axios from 'axios'

export default function Header(props) {
//console.log('console1:props.users)
const usercoook = props.users
const user = usercoook != '' ? usercoook : ''
console.log('teste: ',user)
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="" />
                <title>Big Noticias</title>
            </Head>
            <header className={styles.headerSite}>
                <nav>
                    <ul className={styles.links}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">Sobre nós</a></li>
                        <li><a href="/contact">Contato</a></li>
                        <li>{user ? <><select name="navegar" id="nav">
                            <option value="">pera ae</option>
                            <option value="">Editar perfil</option>
                            <option value="">Mudar senha</option>
                            <option value="">Sair</option>
                        </select> </>: <a href="/login">Logar</a>}</li>
                    </ul>
                </nav>
            </header>


        </>
    )
}
