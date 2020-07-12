import Header from '../../components/Header'
import Footer from '../../components/Footer'
import axios from 'axios'
import serverUrl from '../../utils/env'

export default function Post({ post }) {
    console.log(post)
    return (
        <>
            <Header />
         <h1>{post.title}</h1>
         <h3>{post.subtitle}</h3>
         <h1>{post.post}</h1>
            <Footer />
        </>
    )
}


Post.getInitialProps = async ({query}) =>{
    const { id } = query

    const post = await axios.get(`${serverUrl}/posts/${id}`)
    return {
        "post": post.data,
        }
}