import Header from '../components/Header'
import Footer from '../components/Footer'
import Input from '../components/Input'
import styles from '../components/Submit.module.css'
import Button from '../components/Button'
import { useState } from 'react'
import { useRouter } from 'next/router'
import handleAuthSSR from '../utils/auth'
import axios from 'axios'

export default function Alter({ user }) {
    const Router = useRouter()

    const [values, setValues] = useState({ passwordCurrent: '', passwordNew: '' })

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
        console.log(value)
    }

    const handleRegister = e => {
        e.preventDefault()

        axios.put(`http://127.0.0.1:3333//users/profile/password/${user.id}`, values)
            .then(res => {
                alert('alterado!')
            }).catch(err => alert("Deu ruim", err.message))
    }

    return (
        <>
            <Header />
            <div className={styles.submitForm}>
                <form onSubmit={handleRegister}>
                    <div className={styles.inputSubmit}>
                        <Input type="password" name="passwordCurrent" onChange={handleInputChange} required={false} onFocus={handleInputChange} label="Nome de usuário*" placehold={user.username} />
                    </div>
                    <div className={styles.inputSubmit}>
                        <Input type="password"  name="passwordNew" onChange={handleInputChange} required={false} onFocus={handleInputChange} label="Nome Completo*" placehold={user.completename}/>
                    </div>
                    <Button text="Alterar senha!" />
                </form>
            </div>
            <Footer />
        </>
    )
}

Alter.getInitialProps = async ctx => {
    const user = await handleAuthSSR(ctx)
    return { user }
}