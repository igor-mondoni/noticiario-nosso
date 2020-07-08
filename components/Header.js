import Head from 'next/head'
import styles from './Header.module.css'
import { useCookies } from 'react-cookie'
import { Cookies } from 'react-cookie'
import axios from 'axios'
import Sidebar from './Sidebar'
import handleAuthSSR from '../utils/auth'
import { useState } from 'react'

export default function Header(props) {
    const [cookies, setCookie] = useCookies();
    const usercook = cookies.user
    let user = usercook != '' ? usercook : ''
    console.log('header: ', user)
    const [sidebarShow, setSidebar] = useState(false)

    function toogleSidebar(e) {
        setSidebar(!sidebarShow)
    }

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
                        <li>
                        </li>
                        <li>{user ? <><button onClick={toogleSidebar} className={styles["menu"]}><img srcSet="/photos/click.svg" id={styles.icon} /></button><Sidebar userInfo={user} show={sidebarShow} toogleSidebar={toogleSidebar} />
                        </> : <a href="/login">Logar</a>}</li>
                    </ul>
                </nav>
            </header>


        </>
    )
}
