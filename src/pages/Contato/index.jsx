import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import styles from './Contato.module.css'

function Contato() {
    return (
        <>
            <Header />
            <Container>
            <div className={styles.sobre}>
            <h1>Formulário de Contato</h1>
            <form method="post">

                    <label >Seu Email:</label>
                    <input type="email" className={styles.email }/>


                    <label >Título do Email:</label>
                    <input type="text" className={styles.titulo} />


                    <label >Mensagem:</label>
                    <textarea className={styles.mensagem}  ></textarea>

                    <button>Enviar</button>

            </form>
            </div>
            </Container>
            <Footer />
        </>
    )
}

export default Contato