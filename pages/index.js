import Header from '../components/Header'
import Footer from '../components/Footer'
import Submit from '../components/Submit'
import styles from '../components/Index.module.css'
import { useCookies } from 'react-cookie'
import handleAuthSSR from '../utils/auth'
import axios from 'axios'

export default function Index({ posts }) {
    
    return (
        <>
            <Header />
            <div className={styles.grid_container}>
                
                <div className={styles.section}>
                    {posts.length > 0 ?
                        posts.map((post, index) => (
                            <div className={styles.cardsPosts} key={index}>
                                <div className={styles.imagepost}></div>
                                <div className={styles.textpost}>
                                <h1> {post.title}</h1>
                                <h3> {post.subtitle}</h3>
                                <p> {post.post}</p>
                                <Submit text="Leia mais!" action="show" model="post" id={post.id}/>
                                </div>
                            </div>
                            
                        ))

                        : <p>Nenhuma noticia no momento</p>}
                </div>
            </div>
            <Footer />
        </>
    )
}

Index.getInitialProps = async (ctx) => {
    let posts = []

    posts = await axios.get(`http://127.0.0.1:3333/posts`)
    return { "posts": posts.data }

}