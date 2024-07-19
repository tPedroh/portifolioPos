import styles from './Footer.module.css'

function Footer(){
    return (<footer className={styles.footer}>
        <ul className={styles.social_list}>
            <li>
                Facebook
            </li>
            <li>
                WhatsApp
            </li>
        </ul>
        <p className={styles.copy_right}>
            <span>Bairro Solidário &copy; 2024</span> 
        </p>
    </footer>)
}

export default Footer