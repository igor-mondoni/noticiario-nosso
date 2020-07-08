import styles from './Sidebar.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { Cookies } from 'react-cookie'
import Router from 'next/router'

export default function sideBar(props) {
    console.log("no sidebar ", props.userInfo)
    const cookies = new Cookies();
    const logout = e => {
        cookies.remove('user')
        cookies.remove('token')
        Router.reload(window.location.pathname);
    }
    return (
        <div className={styles.sidebar + ' ' + (props.show ? styles.show : '')}>
            <ul>
                <button onClick={props.toogleSidebar} className={styles["fecharmenu"]}><img srcSet="/photos/cancel-button.svg" id={styles.icon} /></button>
                {props.userInfo ? <><li> {props.userInfo.name}</li>
                    <li>{props.userInfo.username}</li>
                    <li>{props.userInfo.email}</li>
                    <li><button onClick={logout}>Logout</button></li></>
                    : <li><Link href="/login"><a>Logar</a></Link></li>}
                <hr />
                <li><Link href="/" ><a>Página inicial</a></Link></li>
                <hr />
                <li><Link href="/about" ><a>Sobre nós</a></Link></li>
                <hr />
                <li><Link href="/contact" ><a>Contato</a></Link></li>
            </ul>
        </div>
    )
}