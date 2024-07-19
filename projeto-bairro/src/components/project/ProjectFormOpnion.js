import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

function ProjectForm() {
    return (
        <form className={styles.form}>
            <Input
                type="text"
                text="Insira seu nome"
                name="name"
                placeholder="Escreva seu nome"
            />
            <Input
                type="select"
                text="Selecione o serviço"
                name="name"
                placeholder="Selecione"
            />
            <Input
                type="text"
                text="Descreva o que achou do serviço"
                name="name"
                placeholder="Digite"
            />
            <SubmitButton text="Cadastrar" />
        </form>
    )
}

export default ProjectForm