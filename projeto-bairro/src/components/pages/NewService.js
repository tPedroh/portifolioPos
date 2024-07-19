import ProjectForm from '../project/ProjectForm'

import styles from './NewService.module.css'

function NewService() {
    return (
        <div className={styles.newproject_container}>
            <h1>Adicionar Serviço</h1>
            <p> Adicione seu serviço para que o vizinhos possam ver</p>
            <ProjectForm />
        </div>
    )
}

export default NewService