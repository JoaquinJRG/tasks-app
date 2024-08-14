"use client"

import { useState, useContext, useEffect } from "react";
import { NotesContext } from "../notes/page";
import { NotesClass } from "../lib/notes";
import clsx from "clsx";

export function DropDown() {

  const [date, setDate] = useState(false);
  const [title, setTitle] = useState(false);
  const [asc, setAsc] = useState(true);
  const [des, setDesc] = useState(false);
  const { setNotesList, setFilterList } = useContext(NotesContext);

  const handleDate = () => {
    setDate(true);
    setTitle(false);
    const newList = NotesClass.sortByDate(asc);
    setFilterList([...newList]);
  };

  const handleText = () => {
    setTitle(true);
    setDate(false);
    const newList = NotesClass.sortByTitle(asc);
    setFilterList([...newList]);
  };

  const handleAsc = () => {
    setAsc(true);
    setDesc(false);

    if (title) {
      const newList = NotesClass.sortByTitle(true);
      setFilterList([...newList]);
    }

    if (date) {
      const newList = NotesClass.sortByDate(true);
      setFilterList([...newList]);
    }
  };

  const handleDes = () => {
    setDesc(true);
    setAsc(false);

    if (title) {
      const newList = NotesClass.sortByTitle(false);
      setFilterList([...newList]);
    }

    if (date) {
      const newList = NotesClass.sortByDate(false);
      setFilterList([...newList]);
    }
  };

  return (
    <details className="relative w-40 lg:w-44 py-2 px-1 rounded-md shadow-sm bg-[#a688fa]">
      <summary className="flex items-center justify-center gap-1 list-none select-none cursor-pointer ">
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-sort-ascending hidden md:block">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 6l7 0" />
          <path d="M4 12l7 0" />
          <path d="M4 18l9 0" />
          <path d="M15 9l3 -3l3 3" />
          <path d="M18 6l0 12" />
        </svg>
        Sort by
      </summary>
      <div className="absolute left-0 mt-4 w-full bg-white dark:bg-[#46424f] dark:text-white z-10 rounded-md shadow-sm p-1">
        <div
          onClick={handleDate}
          className={clsx(
            "flex py-2 px-3 border border-transparent hover:border-[#ba9ffb] transition-colors cursor-pointer rounded-md",
            { "bg-[#ba9ffb] text-black": date }
          )}>
          Date
        </div>
        <div
          onClick={handleText}
          className={clsx(
            "flex py-2 px-3 mt-1 mb-1 border border-transparent hover:border-[#ba9ffb] transition-colors cursor-pointer rounded-md",
            { "bg-[#ba9ffb] text-black": title }
          )}>
          Title
        </div>
        <div className="bg-gray-500 w-full h-[1px]"></div>
        <div
          onClick={handleAsc}
          className={clsx(
            "flex py-2 px-3 border border-transparent hover:border-[#ba9ffb] mt-1 transition-colors cursor-pointer rounded-md",
            { "bg-[#ba9ffb] text-black": asc }
          )}>ASC</div>
        <div
          onClick={handleDes}
          className={clsx(
            "flex py-2 px-3 border border-transparent hover:border-[#ba9ffb] mt-1 transition-colors cursor-pointer rounded-md",
            { "bg-[#ba9ffb] text-black": des }
          )}>DESC</div>
      </div>
    </details>
  );
}