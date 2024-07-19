import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

function ProjectForm() {
    return (
        <form className={styles.form}>
            <Input
                type="text"
                text="Nome do serviço"
                name="name"
                placeholder="Insira o nome do serviço"
            />
            <Input
                type="number"
                text="Valor do serviço"
                name="name"
                placeholder="Insira o valor do serviço"
            />
            <Input
                type="email"
                text="E-mail para entrar em contato"
                name="name"
                placeholder="Insira o email para cadastro"
            />
            <SubmitButton text="Cadastrar" />
        </form>
    )
}

export default ProjectForm