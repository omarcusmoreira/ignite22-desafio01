import { Check, Circle, Trash } from 'phosphor-react'
import { useState } from 'react'
import styles from './Todo.module.css'

type TodoProps ={
    content:string;
    id:string;
    handleDeleteTodo: (id:string) => void;
    handleCheckTodo: (id:string) => void;
    isChecked: boolean;
}
export function Todo({content, id, handleDeleteTodo, handleCheckTodo, isChecked }: TodoProps){

    return(
        <div className={ styles.wrapper }>
            <input type='checkbox' className={styles.customCheckbox} checked={isChecked} onChange={() => handleCheckTodo(id)}/>
            <p className={isChecked ? styles.todoContentChecked : styles.todoContent}>
                {content}
            </p>
            <button
                className={styles.deleteButton}
                onClick={() => handleDeleteTodo(id)}
            >
                <Trash />
            </button>
        </div>
    )
}