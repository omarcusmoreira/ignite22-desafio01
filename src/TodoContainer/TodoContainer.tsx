import styles from './TodoContainer.module.css'
import { PlusCircle } from 'phosphor-react'
import { Todo } from './components/TodoList/Todo'
import { NoTodo } from './components/NoTodo/NoTodo'
import { useState } from 'react'
import uuid from 'react-uuid'

type Todos = {
    id: string;
    content: string;
    isChecked: boolean;
}
export function TodoContainer(){
    
    const [ todos, setTodos] = useState<Todos[]>([])
    const [ todoText, setTodoText ] = useState('')

    const todosNotEmpty = todos.length !== 0
    const checkedTodos = todos.filter(todo => {
        return todo.isChecked !== false
    })
    const checkedTodosCounter = checkedTodos.length

    function handleChangeTodoText(event: React.ChangeEvent<HTMLInputElement>){
        setTodoText(event.target.value)
    }

    function handleCreateNewTodo(event: any ){
        event?.preventDefault()
        setTodos([...todos, {
            id: uuid(),
            content: todoText,
            isChecked: false,
        }])
        setTodoText('')
        console.log(todos)
    }
    function handleDeleteTodo(id: string){
        const filteredTodo = todos.filter(todo => {
            return todo.id !== id
        })
        setTodos(filteredTodo)
    }

    function handleCheckTodo(id:string){
        const newArray = todos.map(todo => {
            if (todo.id === id) {
              return {...todo, isChecked: !todo.isChecked};
            }
            return todo;
          });
        setTodos(newArray)
    }
    return(
        <div className={styles.container}>
            <div className={styles.addNewTodoContainer}>
                <form onSubmit={handleCreateNewTodo} className={styles.form}>
                    <input 
                        type="text" 
                        className={styles.addNewTodoInput} 
                        placeholder='Adicione uma nova tarefa'
                        onChange={handleChangeTodoText}
                        value={todoText}
                        onSubmit={handleCreateNewTodo}
                        required
                    />
                    <button type='submit'>Criar <PlusCircle /></button>
                </form>
            </div>
            <div className={styles.todoListContainer}>
                <div className={styles.todoListContainerHeader}>
                    <div className={styles.headerInfo}>
                        <span className={styles.createdTodos}>Tarefas criadas</span>
                        <span className={styles.counter}>{todos.length}</span>
                    </div>
                    <div className={styles.headerInfo}>
                        <span className={styles.concluded}>Concluídas</span>
                        <span className={styles.counter}>{checkedTodosCounter} de {todos.length}</span>
                    </div>
                </div>
                <div className={styles.todoList}>
                    { todosNotEmpty ? todos.map(todo =>{
                        return (
                            <Todo
                                id={todo.id}
                                handleDeleteTodo={handleDeleteTodo}
                                content={todo.content}
                                isChecked={todo.isChecked}
                                handleCheckTodo={handleCheckTodo}
                            />
                        )
                    }) : <NoTodo />}
                    
                </div>
            </div>
        </div>
    )
}