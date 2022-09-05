import { ClipboardText } from 'phosphor-react'
import styles from './NoTodo.module.css'
export function NoTodo(){
    return(
        <div className={styles.wrapper}>
            <ClipboardText size={54} />
            <strong>Voce ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}