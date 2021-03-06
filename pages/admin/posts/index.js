import axios from 'axios'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'


export default function Posts({posts}){
    return(
        <>
        <Header/>
       <div>
                    {posts.length > 0 ?
                        posts.map((post, index) => (
                            <div  key={index}>
                                <h1> {post.title}</h1>
                                <h3> {post.subtitle}</h3>
                                <p> {post.post}</p>
                                <button>Leia mais</button>
                            </div>
                            
                        ))

                        : <p>Nenhuma noticia no momento</p>}
                </div>    
                <Footer/>
            </>
    )
}
Posts.getInitialProps = async (ctx) => {
    let posts = []

    posts = await axios.get(`http://127.0.0.1:3333/posts`)

    return { "posts": posts.data}

}