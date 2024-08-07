import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from './Home.module.css'
import Container from '../../components/Container'
import { Link } from 'react-router-dom'


function Home() {
return (
    <>
    <Header />
    <Container>
  <section className={styles.home}>
      <div className={styles.apresentacao}>
          <p>
        Hoje veremos<br/>
        <span>O Sol</span> <br/>
        Junto de incontaveis estrelas
        </p>
        <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
            Veja mais sobre Estrelas
        </Link>
    </div>
    <figure>
        <img className='img-home' src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Sun-and-Moon-PNG/Sun_PNG_Image_Clipart.png?m=1629817782" alt="Imagem de Home" />
    </figure>
        </section>
    </Container>
    <Footer />
    </>
  )
}

export default Home