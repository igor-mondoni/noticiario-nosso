import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import styles from '../components/Submit.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Cookies } from 'react-cookie'
import axios from 'axios'
import Input from '../components/Input'
import Link from 'next/link'


export default function Login() {

    const Router = useRouter()
    const cookies = new Cookies();
    let [token, setToken] = useState(cookies.get('token') || null)

    const [values, setValues] = useState({ email: '', password: '' })
    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const handleLogin = async e => {
        e.preventDefault()
        await axios.post(`http://127.0.0.1:3333/auths`, values)
            .then(
                (res) => {
                    const { token } = res.data.token
                    const usertype = res.data.user.usertype
                    const userdata = {"name":res.data.user.completename,
                    "email":res.data.user.email,
                    "username":res.data.user.username}
                    console.log(userdata.name)
                    cookies.set('token', token)
                    cookies.set('user', userdata)
                    
                    switch (usertype) {
                        case 'admin':
                            Router.push('/admin')
                            break;
                            case 'user':
                                Router.push('/')
                                break;
                                default:
                                    alert('ERRO FATAL, VOCE VAI MORRE')
                                    break;
                    }
                }
            ).catch(err => alert("Usuário não encontrado, tente novamente e se o problema persistir contate um administrador ", err))
    }

    return (
        <>
            <Header />
            <div className={styles.divSubmit}>
                <div className={styles.boxInput}>
                    <form onSubmit={handleLogin}>
                        <div className={styles.submitForm}>
                            <img src="/photos/user.svg"></img>
                        </div>
                        <div className={styles.submitForm}>
                            <Input type="email" name="email" label="Email" required={true} onChange={handleInputChange} onFocus={handleInputChange} />
                        </div>
                        <div className={styles.submitForm}>
                            <Input type="password" name="password" label="Senha" required={true} onChange={handleInputChange} onFocus={handleInputChange} />
                        </div>
                        <Button text="Enviar" />
                    </form>
                    <p>Assine nosso serviço! <a href="/register">Crie uma conta!</a></p>
                </div>
            </div>
            <Footer />
        </>
    )
}