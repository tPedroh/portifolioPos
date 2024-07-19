import ProjectForm from '../project/ProjectFormOpnion'

import styles from './NewService.module.css'

function NewOpnion() {
    return (
        <div className={styles.newproject_container}>
            <h1>Adicionar opinião</h1>
            <p> Adicione sua opinião para incentivar o projeto</p>
            <ProjectForm />
        </div>
    )
}

export default NewOpnion