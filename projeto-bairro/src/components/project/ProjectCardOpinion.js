import { Link } from 'react-router-dom'
import styles from './ProjectCard.module.css'

function ProjectCard({ id, name, service, opnion, handleRemove }) {
  const remove = (e) => {
    e.preventDefault()
    handleRemove(id)
  }

  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <h2>{service}</h2>
      </p>
      <p>
        <span>{opnion}</span>
      </p>
      <div className={styles.project_card_actions}>
        <Link to={'/project/' + id}>
          Editar
        </Link>
        <button onClick={remove}>
          Excluir
        </button>
      </div>
    </div>
  )
}

export default ProjectCard
