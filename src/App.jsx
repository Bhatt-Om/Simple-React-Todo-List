import { useState } from "react"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos((currentTodos) =>{
      return[
        ...currentTodos, 
        {
          id: crypto.randomUUID(), title: newItem, completed: false
        },
      ]
    })
  }

  console.log(todos)
  return (
    <>
      <form onSubmit={handleSubmit} className="new-form">
        <label htmlFor="item">New Items</label>
        <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"  />
        <button className="btn">Add</button>
      </form>
      <h1 className="header">To do list</h1>
      <ul className="list">
        <li>
          <label htmlFor="">
            <input type="checkbox" />
            Item 1
          </label>
          <button className="delete-item">Delete</button>
        </li>
      </ul>
    </>
  )
}