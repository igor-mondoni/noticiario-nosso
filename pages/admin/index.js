import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from '../../components/Index.module.css'
import axios from 'axios'
import { useCookies } from 'react-cookie'

export default function Index() {
    return (
        <>
            <Header />
            <div>
                <h1>Seja bem vindo, usuário!</h1>
                <ul>
                <li><a href="/admin/contact">Mensagens</a></li>
                    <li><a href="/admin/posts/add">Cadastrar posts</a></li>
                    <li><a href="/admin/posts">Ver posts</a></li>
                    <li><a href="/admin/users/add">Cadastrar usuario administrador</a></li>
                    <li><a href="/admin/users">Ver usuarios</a></li>
                    <li><a href="/alter">Perfil</a></li>
                </ul>
            </div>
            <Footer />
        </>
    )
}