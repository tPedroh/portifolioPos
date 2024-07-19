import styles from './Service.module.css'
import LinkButton from '../layout/LinkButton'
import Container from '../layout/Container'

import ProjectCard from '../project/ProjectCardOpinion'

function Opnion() {
    return (
        <div className={styles.project_container}>
          <div className={styles.title_container}>
            <h1>Opiniões de usuários</h1>
            <LinkButton to="/newopnion" text="Cadastre sua opinião" />
          </div>
          <Container customClass="start">
                <ProjectCard
                  id="1"
                  name="Salomé"
                  service="Aula de Gestão"
                  opnion="Aula de gestão muito prática e inspiradora!"
                  key="1"
                  handleRemove="1"
                />
                <ProjectCard
                  id="1"
                  name="Isadora"
                  service="Aula de dança"
                  opnion="Aula de dança divertida e energizante!"
                  key="1"
                  handleRemove="1"
                />
          </Container>
        </div>
    )
}

export default Opnion