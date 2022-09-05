import styles from './Header.module.css'
import logoImage from '../assets/Logo.svg'

export function Header(){
    return (
        <header className={styles.wrapper}>
            <img src={logoImage} alt="Logo" />
        </header>
    )
}