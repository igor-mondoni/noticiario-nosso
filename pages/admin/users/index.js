import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import axios from 'axios'

export default function Index({ users }) {

    return (
        <>
            <Header />
            <div>
                <div>
                    {users.length > 0 ?
                        users.map((user, index) => (
                            <div key={index}>
                                <h1> {user.id}</h1>
                                <h3> {user.completename}</h3>
                                <p> {user.email}</p>
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
    let users = []

    users = await axios.get(`http://127.0.0.1:3333/users`)
    return { "users": users.data }

}