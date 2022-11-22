import React from 'react'

const Todo = ({todo}) => {
  return (
    <div className="flex  mt-4 justify-center items-center gap-6">
      <label htmlFor="">
        <input type="checkbox" checked={todo.complete}/>
      </label>
      <div className="text-lg  font-semibold">{todo.name}</div>
    </div>
  )
}

export default Todo