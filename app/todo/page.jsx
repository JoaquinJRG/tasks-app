"use client"
import { TodosClass } from "../lib/todos";
import { SearchBar } from "../components/SearchBar";
import { TodosBox } from "../components/TodosBox";
import { useState, createContext, useEffect } from "react";
import { TodoModal } from "../components/TodoModal";

export const TodoContext = createContext();

export default function TodoPage() {

  const [showModal, setShowModal] = useState(false);
  const [todosList, setTodosList] = useState([]);
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await TodosClass.getAll();
      setTodosList([...todos]);
      setFilterTodos([...todos]);
    };

    fetchTodos();
  }, []);

  const searchFunction = (text) => {
    const newFilterTodos = TodosClass.search(text);
    setFilterTodos(newFilterTodos);
  };

  return (
    <TodoContext.Provider value={{ setTodosList, setFilterTodos }}>
      {showModal && <TodoModal closeModal={setShowModal} />}
      <header className="flex items-center gap-3">
        <button
          onClick={() => setShowModal(!showModal)}
          className="min-w-10 min-h-10 bg-black text-white rounded-md text-xl shadow-sm"
        >+</button>
        <SearchBar searchFunction={searchFunction} />
      </header>
      <main>
        <h1 className="text-3xl lg:text-5xl my-5">To Do</h1>
        <TodosBox filterTodos={filterTodos} />
      </main >
    </TodoContext.Provider>
  );
}
