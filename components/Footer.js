import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <div className={styles["fundopreto"]}>
                <p>Visite tambem nossas redes sociais para ficar a par de tudo</p>
                <div className={styles.icons}>
                    <div className={styles.faceicon}><img src="/photos/facebook.svg"></img></div>
                    <div className={styles.faceicon}><img src="/photos/linkedin.svg"></img></div>
                    <div className={styles.faceicon}><img src="/photos/instagram.svg"></img></div>
                    <div className={styles.faceicon}><img src="/photos/twitter.svg"></img></div>
                </div>
                <h1>Site amostra apenas didática feita por <a href="https://github.com/igor-mondoni" target="_blank">Igor Henrique Mondoni</a></h1>
                <h5>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></h5>
            </div>

        </>
    )
}