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

    const [values, setValues] = useState({ completename: user.completename, email: user.email,  username: user.username, doc_number: user.doc_number, address: user.address1, address2: user.address2, birth_date: user.birth_date })

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
        console.log(value)
    }

    const handleRegister = e => {
        e.preventDefault()

        axios.post(`http://127.0.0.1:3333/users/profile/${user.id}`, values)
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
                        <Input type="text" name="username" onChange={handleInputChange} required={true} onFocus={handleInputChange} label="Nome de usuário*" />
                    </div>
                    <div className={styles.inputSubmit}>
                        <Input type="text"  name="completename" onChange={handleInputChange} required={true} onFocus={handleInputChange} label="Nome Completo*" />
                    </div>
                    <div className={styles.inputSubmit}>
                        <Input type="text" name="doc_number" onChange={handleInputChange} required={true} onFocus={handleInputChange} label="Documento (cpf ou rg)*" />
                    </div>
                    <div className={styles.inputSubmit}>
                        <Input type="text" name="address" onChange={handleInputChange} required={true} onFocus={handleInputChange} label="Endereço 1*" />
                    </div>
                    <div className={styles.inputSubmit}>
                        <Input type="text" name="address2" onChange={handleInputChange} required={false} onFocus={handleInputChange} label="Endereço 2" />
                    </div>
                    <div className={styles.inputSubmit}>
                        <Input type="date" name="birth_date" onChange={handleInputChange} required={true} onFocus={handleInputChange} label="data de nascimento" />
                    </div>
                    <div className={styles.inputSubmit}>
                        <Input type="email" name="email" label="Email" required={true} onChange={handleInputChange} onFocus={handleInputChange} />
                    </div>
                    <Button text="Cadastrar" />
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