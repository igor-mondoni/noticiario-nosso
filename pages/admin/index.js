import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from '../../components/Index.module.css'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import handleAuthAdminSSR from '../../utils/authAdmin'

export default function Index({ user }) {
    return (
        <>
            <Header />
            <div className={styles.sectionAdmin}>
                <div className={styles.cabecalho}>
                    <h1>Seja bem vindo, {user.completename}!</h1>
                </div>

                <div className={styles.item}>
                    <img srcSet="/photos/chat.svg" />
                    <a href="/admin/contact">Mensagens</a>
                </div>
                <div className={styles.item}>
                    <img srcSet="/photos/list.svg" />
                    <a href="/admin/category">Categorias das postagens</a>
                </div>
                <div className={styles.item}>
                    <img srcSet="/photos/article.svg" />
                    <a href="/admin/posts/add">Cadastrar posts</a>
                </div>
                <div className={styles.item}>
                    <img srcSet="/photos/article.svg" />
                    <a href="/admin/posts">Ver posts</a>
                </div>
                <div className={styles.item}>
                    <img srcSet="/photos/user2.svg" />
                    <a href="/admin/users/add">Cadastrar usuario administrador</a>
                </div>
                <div className={styles.item}>
                    <img srcSet="/photos/user.svg" />
                    <a href="/admin/users">Ver usuarios</a>
                </div>
                <div className={styles.item}>
                    <img srcSet="/photos/profile.svg" />
                    <a href="/alter">Perfil</a>
                </div>
            </div>
            <Footer />
        </>
    )
}

Index.getInitialProps = async ctx => {
    const user = await handleAuthAdminSSR(ctx)
    return { user }
}