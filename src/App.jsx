export default function App() {
  return (
    <>
      <form className="new-form">
        <label htmlFor="item">New Items</label>
        <input type="text" id="item" />
      </form>
      <button className="btn">Add</button>
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