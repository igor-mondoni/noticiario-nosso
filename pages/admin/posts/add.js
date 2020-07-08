import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Input from '../../../components/Input'
import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function Add(props) {

    const [values, setValues] = useState({ title:'', subtitle: '', post:'' })

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
        console.log(value)
    }

    const handleRegister = e => {
        e.preventDefault()

        axios.post(`http://127.0.0.1:3333/posts`, values)
            .then(res => {
                alert('Post registrado!')
            }).catch(err => alert("Deu ruim", err.message))
    }

    return (
        <>
            <Header />

            <form onSubmit={handleRegister}>
                <div>

                    <Input type="text" name="title" onChange={handleInputChange} required={true} onFocus={handleInputChange} label="Titulo" />
                    <Input type="text" name="subtitle" onChange={handleInputChange} required={true} onFocus={handleInputChange} label="Sub-titulo" />
                    <Input type="text" name="post" onChange={handleInputChange} required={true} onFocus={handleInputChange} label="Descreva" />
                </div>
                <button type="submit">Enviar</button>
            </form>
            <Footer />
        </>
    )
}