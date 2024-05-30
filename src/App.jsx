import { useEffect, useState } from 'react'
import './App.css'
function App() {
  const [todos,setTodos]= useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts').then(response=>response.json()).then(data=>{
      setTodos(data)
    })
  },[])
  const Todo=({todo})=>{
    return(<>
    <div className="box">
    <div className="todo">UserId: {todo.userId}</div>
    <div className="todo">Id: {todo.id}</div>
    <div className="todo">Title: {todo.title}</div>
    <div className="todo">Body: {todo.body}</div>
    </div>
    </>)
  }
  return (
    <>
    {
      todos.map(todo=>{
        return <Todo key={todo.id} todo={todo}/>
      })
    }
    </>
  )
}
export default App