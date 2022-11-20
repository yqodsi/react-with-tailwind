import { useState, useRef } from "react";
import TodoList from "../components/TodoList.jsx";
import "./index.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  const addTodo = (e) => {
    const name = todoNameRef.current.value;
    if (name === "") return null;
    console.log(name);
    setTodos((prev) => {
      return [...prev, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  };
  return (
    <div className="App flex flex-col gap-7 border h-screen items-center">
      <TodoList todos={todos} />
      <input
        ref={todoNameRef}
        className="border-2 border-gray-400 hover:border-green-400 text-lg focus:border-red-400 rounded-full py-2 px-12"
        type="text"
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 px-6 w-64 py-2 rounded-md text-white text-xl "
        onClick={addTodo}
      >
        Add Todo
      </button>
      <button className="bg-red-500 hover:bg-red-600 px-6 w-64 py-2 rounded-md text-white text-xl ">
        Clear Completed Todos
      </button>
      <div className="text-sm  font-semibold">0 todo left</div>
    </div>
  );
}

export default App;
