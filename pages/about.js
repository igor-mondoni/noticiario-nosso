import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../components/Index.module.css'
import axios from 'axios'

export default function About() {
    return(
        <>
    <Header/>
    <div className={styles.full_banner}>
        <div className={styles.contentAbout}>
            <h1>Seja bem vindo a um site que irá brincar com a realidade e sensacionalizar tudo!</h1>

            <h3>MISSÃO</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id magna aliquam, semper lacus et, porta metus. Ut ac lorem rutrum nunc placerat aliquet eu sed felis. Donec quis lectus egestas, ultricies augue a, efficitur nisi. Suspendisse malesuada blandit aliquet. Mauris quis placerat sapien, eu tincidunt metus. Quisque justo sem, porta ut porttitor et, volutpat ut ipsum. Sed elementum urna ac tellus venenatis efficitur. Donec lorem arcu, dignissim ut quam ac, euismod semper nulla. Duis quis nisl sagittis turpis malesuada cursus. Nulla a gravida quam. In vulputate, risus eu cursus varius, elit nunc elementum felis, sit amet posuere libero lectus vitae lorem.</p>
            <h3>OBJETIVOS</h3>
            <p>Donec est libero, lobortis et ante eget, euismod tincidunt mauris. Nunc ut imperdiet odio. Sed luctus massa ut metus tempus, sit amet molestie purus tempus. In vel tincidunt orci. Aenean maximus pellentesque enim. Phasellus sagittis sed dolor viverra tincidunt. Nunc viverra vestibulum ipsum vel suscipit.</p>
            <h3>VISÃO</h3>
            <p>Donec est libero, lobortis et ante eget, euismod tincidunt mauris. Nunc ut imperdiet odio. Sed luctus massa ut metus tempus, sit amet molestie purus tempus. In vel tincidunt orci. Aenean maximus pellentesque enim. Phasellus sagittis sed dolor viverra tincidunt. Nunc viverra vestibulum ipsum vel suscipit.</p>
        </div>
 </div>
    <Footer/>
    </>
    )
}