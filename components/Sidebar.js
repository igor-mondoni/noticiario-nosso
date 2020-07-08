import styles from './Sidebar.module.css'
import Link from 'next/link' 
import { useState } from 'react'

export default function sideBar (props) {
    return (
        <div className={styles.sidebar + ' ' + (props.show ? styles.show : '')}>
            <ul>
                <button onClick={props.toogleSidebar} className={styles["fecharmenu"]}><img srcSet="/assets/Icon/fechar.svg" id={styles.icon} /></button>
                <li><Link href="/" ><a>Home</a></Link></li>
                <hr/>
                <li><Link href="/sobrenos" ><a>Sobre nós</a></Link></li>
                <hr/>
                <li><Link href="/gallery" ><a>Galeria</a></Link></li>
                <hr/>
                <li><Link href="/planos" ><a>Planos</a></Link></li>
                <hr/>
                <li><Link href="/blog" ><a>Blog</a></Link></li>
                <hr/>
                <li><Link href="/contact" ><a>Contato</a></Link></li>
                <li>
                    <Link href="/login" >
                        <a className={styles["btnloginsidebar"]}>
                            <img srcSet="/assets/Icon/user.svg" id={styles.icon} />
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}