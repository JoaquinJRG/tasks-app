"use client"
import { useState, useContext, useEffect } from "react";
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

  const enterEsc = (e) => {
    if (e.code === "Escape") {
      closeModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", enterEsc);

    return () => {
      document.removeEventListener("keydown", enterEsc);
    };
  });

  return (
    <div className="h-full w-full flex items-center justify-center absolute top-0 right-0 bg-black/40">
      <div className="flex flex-col gap-3 rounded-md p-4 shadow-md w-80 bg-white dark:bg-[#46424f]">
        <main className="flex flex-col gap-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Añadir una tarea ..."
            className="outline-none dark:bg-[#46424f] dark:text-white"
          />
        </main>
        <footer className="flex items-center justify-start gap-2 mt-5">
          <button className=" rounded-md px-3 py-1 bg-[#a688fa] text-white dark:text-black" onClick={() => closeModal(false)}>Cerrar</button>
          <button className="rounded-md px-3 py-1 bg-[#a688fa] text-white dark:text-black" onClick={handleClick}>Guardar</button>
        </footer>
      </div>
    </div>
  );
}