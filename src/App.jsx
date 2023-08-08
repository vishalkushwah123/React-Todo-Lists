import './App.css'
import React, { useState } from 'react'
function App() {
  const [inputList, setInputList] = useState('')
  const [item, setItem] = useState([])

  const itemHandle = (e) => {
    setInputList(e.target.value)
  }

  const addData = () => {
    setItem([...item, inputList])
    setInputList('')
  }

  const handleDelete = (id) => {
    setItem(item.filter((items, index) => {
      return index !== id;
    })
    )
  }

  return (
    <div className='container'>
      <div className="box">
        <br />
        <h1>Todo App</h1>
        <br />
        <div className="box-2">
          <div className="input">
            <input type="text" placeholder='Add Item' value={inputList} onChange={(e) => itemHandle(e)} />
            <button onClick={addData}>Add</button>
          </div>

          <ol>
            {
              item.map((item, index) => {
                return (
                  <div className='listItem' key={index} id={index}>
                    <li >{item}</li>
                    <button onClick={() => handleDelete(index)}>Remove</button>
                  </div>
                )
              })
            }
          </ol>
        </div>
      </div>
    </div>
  )
}

export default App
