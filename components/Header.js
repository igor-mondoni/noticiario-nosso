import Head from 'next/head'
import styles from './Header.module.css'
import { useCookies } from 'react-cookie'
import { Cookies } from 'react-cookie'
import axios from 'axios'
import Link from 'next/link'
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
                <link rel="shortcut icon" href="photos/fake-news.svg" />
                <title>Fakenius</title>
            </Head>
            <header>
                <Link href="/">
                    <a>
                        <img className={styles.logo} srcSet="/photos/fake-news.svg" id="logo" alt="Logo" />
                    </a>
                </Link>
                <div className={styles.headerfundo}>
                    <button onClick={toogleSidebar} className={styles.menu}><img srcSet="/photos/click.svg" id={styles.icon} /></button>
                    <Sidebar show={sidebarShow} toogleSidebar={toogleSidebar} />
                </div>



            </header>
        </>
    )
}
