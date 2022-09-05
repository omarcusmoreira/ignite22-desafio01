import { Check, Circle, Trash } from 'phosphor-react'
import { useState } from 'react'
import styles from './TodoList.module.css'

export function Todo(){
    const [ isChecked, setIsCHecked ] = useState(false)
    function handleCheckTodo(){
        setIsCHecked(!isChecked)
    }
    return(
        <div className={ styles.wrapper }>
            <input type='checkbox' className={styles.customCheckbox} checked={isChecked} onChange={handleCheckTodo}/>
            <p className={isChecked ? styles.todoContentChecked : styles.todoContent}>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. Duis vel sed fames integer.
            </p>
            <button  className={styles.deleteButton}><Trash /></button>
        </div>
    )
}