import { useState } from 'react'
import './global.css'
import styles from './App.module.css'
import { Header } from './Header/Header'
import { TodoContainer } from './TodoContainer/TodoContainer'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <TodoContainer />
    </div>
  )
}

export default App
