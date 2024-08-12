"use client"
import { useState, useContext } from "react";
import { TodosClass } from "../lib/todos";
import { TodoContext } from "../todo/page";

export function TodoModal({ closeModal }) {

  const { setTodosList, setFilterTodos } = useContext(TodoContext);
  const [text, setText] = useState('');
  const handleClick = async () => {
    const newTodoList = await TodosClass.create(text);
    setTodosList(...[newTodoList]);
    setFilterTodos(...[newTodoList]);

    closeModal(false);
  };

  return (
    <div className="h-full w-full flex items-center justify-center absolute top-0 right-0 bg-black/40">
      <div className="flex flex-col gap-3 rounded-md p-4 shadow-md w-80 bg-white">
        <main className="flex flex-col gap-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Add a task ..."
            className="outline-none"
          />
        </main>
        <footer className="flex items-center justify-start gap-2 mt-5">
          <button className=" rounded-md px-3 py-1 bg-white border border-black" onClick={() => closeModal(false)}>Close</button>
          <button className="rounded-md px-3 py-1 bg-white border border-black" onClick={handleClick}>Save</button>
        </footer>
      </div>
    </div>
  );
}