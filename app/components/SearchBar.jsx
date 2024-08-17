"use client"
import { useState } from "react";

export function SearchBar({ searchFunction }) {

  const [text, setText] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;
    setText(newText);
    searchFunction(newText);
  };

  return (
    <div className="flex items-center gap-2 bg-neutral-200 dark:bg-[#2f2b3a] px-3 py-2 rounded-md w-full shadow-sm dark:text-white">
      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M21 21l-6 -6" />
      </svg>
      <input
        type="text"
        value={text}
        placeholder="Buscar"
        className=" w-full outline-none bg-neutral-200 dark:bg-[#2f2b3a]"
        onChange={handleChange}
      />
    </div>
  )
}