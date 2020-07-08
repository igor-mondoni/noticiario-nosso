import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../components/Index.module.css'
import stylesinput from '../components/Submit.module.css'
import axios from 'axios'
import { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

export default function Contact() {
    const initialState = { name: '', phone: '', email: '', message: '' }

    const [values, setValues] = useState(initialState)

    const handleInputChange = e => {
        const { name, value } = e.target

        setValues({ ...values, [name]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        axios.post(`http://127.0.0.1:3333/contact`, values)
            .then(res => {
                // console.log('Usuário autenticado!')
                alert('Sua mensagem foi enviada com Sucesso!')
                setValues(initialState)

            }
            ).catch(err => alert('Deu ruim', err.message))
    }
    return (
        <>
            <Header />
            <div className={styles.divSubmit}>
                <div className={styles.boxInput}>
                    <form onSubmit={handleFormSubmit}>
                        <div className={styles.submitForm}>
                            <Input type="text" name="name" label="Nome" required={true} onChange={handleInputChange} onFocus={handleInputChange} />
                        </div>
                        <div className={styles.submitForm}>
                            <Input type="text" name="phone" label="Celular" required={true} onChange={handleInputChange} onFocus={handleInputChange} />
                        </div>
                        <div className={styles.submitForm}>
                            <Input type="email" name="email" label="E-mail" required={true} onChange={handleInputChange} onFocus={handleInputChange} />
                        </div>
                        <div className={styles.submitForm}>
                            <textarea name="message" onChange={handleInputChange} onFocus={handleInputChange}/>
                        </div>
                        <Button text="Enviar" />
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}