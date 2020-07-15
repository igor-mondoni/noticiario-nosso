import styles from './Sidebar.module.css'
import Link from 'next/link'
import Submit from '../components/Submit'
import { useState } from 'react'
import { Cookies } from 'react-cookie'
import { useCookies } from 'react-cookie'
import Router from 'next/router'
import axios from 'axios'
import serverUrl from '../utils/env'


export default function sideBar(props) {

    console.log("no sidebar id ", props.id)
    const cookies = new Cookies();
    //const [values, setValues] = useState({ email: '' })
    // const resp = axios.get(serverUrl + '/users/permission', values)
    //const permission = resp.data
    // console.log('sidebar: ',permission)
    const logout = e => {
        cookies.remove('user')
        cookies.remove('token')
        Router.reload(window.location.pathname);
    }

    return (
        <div className={styles.sidebar + ' ' + (props.show ? styles.show : '')}>
            <ul>
                <button onClick={props.toogleSidebar} className={styles["fecharmenu"]}>
                    <img srcSet="/photos/cancel-button.svg" id={styles.icon} /></button>
                {props.userInfo ?
                    <>
                        <li><h1>{props.userInfo.name}</h1></li>
                        <li><p>{props.userInfo.username}</p></li>
                        <li><p>{props.userInfo.email}</p></li>
                        <li><Link href="/alter" ><a>Alterar dados cadastrais</a></Link></li>
                        <li>Alterar senha</li>
                        <li><p><button className={styles.btnloginsidebar} onClick={logout}>Logout</button></p></li>
                        <hr/></>
                    : <><li><Link href="/login"><a>Logar</a></Link></li></>}

                <li><Link href="/" ><a>Página inicial</a></Link></li>
                <li><Link href="/about" ><a>Sobre nós</a></Link></li>
                <li><Link href="/contact" ><a>Contato</a></Link></li>
            </ul>
        </div>
    )
}