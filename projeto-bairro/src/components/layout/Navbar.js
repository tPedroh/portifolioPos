import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../../img/logo.PNG'

function Navbar() {
 return (    
    <nav class={styles.navbar}>
        <Container>
            <Link to="/">
            <img src={logo} alt="Logo" />
            </Link>
            <ul className={styles.list}> 
                <li className={styles.item}>
                    <Link to='/'> Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/service'> Serviço</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/opnion'> Opinião</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/contact'> Contato</Link>
                </li>
            </ul>    
        </Container>
    </nav>
 )
}

export default Navbar