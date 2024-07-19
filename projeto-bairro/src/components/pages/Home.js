import styles from './Home.module.css'
import bairro from '../../img/fundo.png'

import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem Vindo ao <span>Bairro Solidário</span></h1>
            <p>Adicione serviços para ajudar seus vizinhos</p>
            <LinkButton to="/NewService" text="Adicionar Serviço" />
            <img src={bairro} alt="Bairro" />
        </section>
    )
}

export default Home