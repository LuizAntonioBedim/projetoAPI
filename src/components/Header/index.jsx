import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>Estrelas API</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/estrelas">Estrelas</Link>
                <Link to="/contato">Contato</Link>

            </nav>
        </header>
    )    
}

export default Header