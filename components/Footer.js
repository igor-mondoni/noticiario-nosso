import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <div className={styles.fundogray}>
                <p>Visite tambem nossas redes sociais para ficar a par de tudo</p>
                <div className={styles.icons}>
                    <div className={styles.faceicon}><img src="/photos/facebook.svg" /></div>
                    <div className={styles.faceicon}><img src="/photos/linkedin.svg" /></div>
                    <div className={styles.faceicon}><img src="/photos/instagram.svg" /></div>
                    <div className={styles.faceicon}><img src="/photos/twitter.svg" /></div>
                </div>
                <h4>Site amostra apenas didática feita por <a href="https://github.com/igor-mondoni" target="_blank">Igor Henrique Mondoni</a></h4>
                <h5>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></h5>
            </div>

            <div className={styles.fundopreto}>

            </div>
        </>
    )
}