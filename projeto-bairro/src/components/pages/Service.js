import styles from './Service.module.css'
import LinkButton from '../layout/LinkButton'
import Container from '../layout/Container'

import ProjectCard from '../project/ProjectCard'

function Service() {
    return (
        <div className={styles.project_container}>
          <div className={styles.title_container}>
            <h1>Serviços Disponivéis</h1>
            <LinkButton to="/newservice" text="Cadastrar Serviço" />
          </div>
          <Container customClass="start">
                <ProjectCard
                  id="1"
                  name="Aula de Gestão"
                  budget="50"
                  category="teste@teste.com"
                  key="1"
                  handleRemove="1"
                />
                <ProjectCard
                  id="1"
                  name="Sessão de jogos"
                  budget="10"
                  category="teste@teste.com"
                  key="1"
                  handleRemove="1"
                />
                <ProjectCard
                  id="1"
                  name="Reunião de vizinhos"
                  budget="0"
                  category="teste@teste.com"
                  key="1"
                  handleRemove="1"
                />
                <ProjectCard
                  id="1"
                  name="Aula de dança"
                  budget="0"
                  category="teste@teste.com"
                  key="1"
                  handleRemove="1"
                />
          </Container>
        </div>
    )
}

export default Service