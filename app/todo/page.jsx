"use client"
import { TodosClass } from "../lib/todos";
import { SearchBar } from "../components/SearchBar";
import { TodosBox } from "../components/TodosBox";
import { useState, createContext, useEffect } from "react";
import { TodoModal } from "../components/TodoModal";
import { TrashIcon } from "../components/icons/TrashIcons";
import clsx from "clsx";

export const TodoContext = createContext();

export default function TodoPage() {

  const [showModal, setShowModal] = useState(false);
  const [todosList, setTodosList] = useState([]);
  const [filterTodos, setFilterTodos] = useState([]);

  const [all, setAll] = useState(true);
  const [pending, setPending] = useState(false);
  const [completed, setCompleted] = useState(false);

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

  const handleAll = () => {
    setAll(true);
    setPending(false);
    setCompleted(false);
    setFilterTodos([...todosList]);
  };

  const handlePending = () => {
    setAll(false);
    setPending(true);
    setCompleted(false);
    const pendingTask = TodosClass.getPending();
    setFilterTodos([...pendingTask]);
  };

  const handleCompleted = () => {
    setAll(false);
    setPending(false);
    setCompleted(true);
    const completedTask = TodosClass.getCompleted();
    setFilterTodos([...completedTask]);
  };

  const deleteAll = () => {
    TodosClass.deleteAll();
    setFilterTodos([]);
    setTodosList([]);
  };

  return (
    <TodoContext.Provider value={{ setTodosList, setFilterTodos }}>
      {showModal && <TodoModal closeModal={setShowModal} />}
      <header className="flex items-center gap-3">
        <button
          onClick={() => setShowModal(!showModal)}
          className="min-w-10 min-h-10 bg-[#a688fa] dark:text-black text-white rounded-md text-xl shadow-sm"
        >+</button>
        <SearchBar searchFunction={searchFunction} />
      </header>
      <main>
        <h1 className="text-3xl lg:text-5xl my-5 dark:text-white">To Do</h1>
        <nav className="flex items-center justify-between mb-5 dark:text-white">
          <div className="flex items-center gap-5">
            <button
              onClick={handleAll}
              className={clsx({ "border-b-2 border-[#a688fa] text-[#a688fa]": all })}
            >
              All
            </button>
            <button
              onClick={handlePending}
              className={clsx({ "border-b-2 border-[#a688fa] text-[#a688fa]": pending })}
            >
              Pending
            </button>
            <button
              onClick={handleCompleted}
              className={clsx({ "border-b-2 border-[#a688fa] text-[#a688fa]": completed })}
            >
              Completed
            </button>
          </div>
          <button
            onClick={deleteAll}
            className="flex gap-2 p-2 rounded-md shadow-sm bg-[#a688fa] text-white dark:text-black"
          >
            <TrashIcon />
            <span>Clear All</span>
          </button>
        </nav>
        <TodosBox filterTodos={filterTodos} />
      </main >
    </TodoContext.Provider>
  );
}
