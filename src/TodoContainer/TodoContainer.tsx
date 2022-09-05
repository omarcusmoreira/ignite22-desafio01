import styles from './TodoContainer.module.css'
import { PlusCircle } from 'phosphor-react'
import { Todo } from './components/Todo/Todo'
import { NoTodo } from './components/NoTodo/NoTodo'

export function TodoContainer(){
    return(
        <div className={styles.container}>
            <div className={styles.addNewTodoContainer}>
                <input type="text" className={styles.addNewTodoInput} placeholder='Adicione uma nova tarefa'/>
                <button>Criar <PlusCircle /></button>
            </div>
            <div className={styles.todoListContainer}>
                <div className={styles.todoListContainerHeader}>
                    <div className={styles.headerInfo}>
                        <span className={styles.createdTodos}>Tarefas criadas</span>
                        <span className={styles.counter}>5</span>
                    </div>
                    <div className={styles.headerInfo}>
                        <span className={styles.concluded}>Concluídas</span>
                        <span className={styles.counter}>3 de 7</span>
                    </div>
                </div>
                <div className={styles.todoList}>
                    <Todo />
                    <Todo />
                    <Todo />
                    <NoTodo />
                </div>
            </div>
        </div>
    )
}