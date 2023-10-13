import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
  

  return (
    <>
        <h1>Redux Toolkit Todos</h1>
        <AddTodo />
        <Todo />
    </>
  )
}

export default App
