"use client"
import { useContext, useState } from "react";
import { TodosClass } from "../lib/todos";
import { TodoContext } from "../todo/page";
import { CheckIcon } from "./icons/CheckIcon";
import { EditIcon } from "./icons/EditIcon";
import { TrashIcon } from "./icons/TrashIcons";

export function Todo({ todo }) {

  const [done, setDone] = useState(todo.isDone)
  const { setTodosList, setFilterTodos } = useContext(TodoContext);

  const handleDelete = async (id) => {
    const newTodos = await TodosClass.delete(id);
    setTodosList(...[newTodos]);
    setFilterTodos(...[newTodos]);
  };

  const handleCheck = async (id, text) => {
    const newIsDone = !done;
    setDone(newIsDone);
    await TodosClass.edit(id, text, newIsDone);
  };

  return (
    <li
      className="flex items-center justify-between py-4 lg:px-6 px-3 rounded-md bg-white shadow-md"
    >
      <button
        onClick={() => handleCheck(todo.id, todo.text)}
        className="flex justify-center items-center gap-1 w-5 h-5 border border-black rounded-sm"
      >
        {done ? (<CheckIcon />) : ""}
      </button>
      <span className={`flex-1 ml-5 text-wrap ${done ? "line-through text-gray-700" : ""}`}>
        {todo.text}
      </span>
      <div className="flex items-center gap-3 border-l border-black pl-3">
        <button
          className="hover:scale-125 transition-transform"
        >
          <EditIcon />
        </button>
        <button
          onClick={() => handleDelete(todo.id)}
          className="hover:scale-125 transition-transform"
        >
          <TrashIcon />
        </button>
      </div>
    </li>
  );
}