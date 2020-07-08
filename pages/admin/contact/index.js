import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import axios from 'axios'

export default function Index({ contacts }) {

    return (
        <>
            <Header />
            <div>
                <div>
                    {contacts.length > 0 ?
                        contacts.map((contact, index) => (
                            <div key={index}>
                                <h1> {contact.id}</h1>
                                <h3> {contact.name}</h3>
                                <p> {contact.email}</p>
                                <p> {contact.phone}</p>
                                <p> {contact.message}</p>
                                <p> {contact.complete}</p>
                                <button>Leia mais</button>
                            </div>
                            
                        ))

                        : <p>Não há usuários cadastrados :(</p>}
                </div>
            </div>
            <Footer />
        </>
    )
}


Index.getInitialProps = async (ctx) => {
    let contacts = []

    contacts = await axios.get(`http://127.0.0.1:3333/contact`)
    return { "contacts": contacts.data }

}