import axios from 'axios'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'


export default function Category({category}){
    return(
        <>
        <Header/>
       <div>
                    {category.length > 0 ?
                        category.map((categorys, index) => (
                            <div  key={index}>
                                <h1> {categorys.title}</h1>
                                <h3> {categorys.subtitle}</h3>
                                <button>Leia mais</button>
                            </div>
                            
                        ))

                        : <p>Nenhuma noticia no momento</p>}
                </div>    
                <Footer/>
            </>
    )
}
Category.getInitialProps = async (ctx) => {
    let category = []

    category = await axios.get(`http://127.0.0.1:3333/posts`)

    return { "category": category.data}

}