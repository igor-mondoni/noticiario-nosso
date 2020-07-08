import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Input from '../../../components/Input'
import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function Register(props) {
    const Router = useRouter()

    const [values, setValues] = useState({ completename: '', email: '', password: '', username: '', doc_number: '', address: '', address2: '', birth_date: '' , usertype: 'admin'})

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
        console.log(value)
    }

    const handleRegister = e => {
        e.preventDefault()

        axios.post(`http://127.0.0.1:3333/users`, values)
            .then(res => {
                alert('registrado!')
            }).catch(err => alert("Deu ruim", err.message))
    }

    return (
        <>
            <Header />

            <form onSubmit={handleRegister}>
                <div>

                    <Input type="text" name="username" onChange={handleInputChange} required={true} onFocus={handleInputChange} label="Nome de usuário*" />
                    <Input type="text" name="completename" onChange={handleInputChange} required={true} onFocus={handleInputChange} label="Nome Completo*" />
                    <Input type="text" name="doc_number" onChange={handleInputChange} required={true} onFocus={handleInputChange} label="Documento (cpf ou rg)*" />
                    <Input type="text" name="address" onChange={handleInputChange} required={true} onFocus={handleInputChange} label="Endereço 1*" />
                    <Input type="text" name="address2" onChange={handleInputChange} required={false} onFocus={handleInputChange} label="Endereço 2" />
                    <Input type="date" name="birth_date" onChange={handleInputChange} required={true} onFocus={handleInputChange} label="data de nascimento" />
                    <Input type="email" name="email" label="Email" required={true} onChange={handleInputChange} onFocus={handleInputChange} />
                    <Input type="password" name="password" label="Senha" required={true} onChange={handleInputChange} onFocus={handleInputChange} />
                </div>
                <button type="submit">Registrar</button>
            </form>
            <Footer />
        </>
    )
}