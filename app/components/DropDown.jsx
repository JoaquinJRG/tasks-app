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
    <details className="relative bg-white w-40 lg:w-44 py-2 px-1 rounded-md shadow-sm border open:border-black">
      <summary className="list-none select-none cursor-pointer text-center">Sort by</summary>
      <div className="absolute left-0 mt-4 w-full bg-white z-10 rounded-md shadow-sm p-1">
        <div
          onClick={handleDate}
          className={clsx(
            "flex py-2 px-3 border border-transparent hover:border-black transition-colors cursor-pointer rounded-md",
            { "bg-gray-300": date }
          )}>
          Date
        </div>
        <div
          onClick={handleText}
          className={clsx(
            "flex py-2 px-3 mt-1 mb-1 border border-transparent hover:border-black transition-colors cursor-pointer rounded-md",
            { "bg-gray-300": title }
          )}>
          Title
        </div>
        <div className="bg-gray-500 w-full h-[1px]"></div>
        <div
          onClick={handleAsc}
          className={clsx(
            "flex py-2 px-3 border border-transparent hover:border-black mt-1 transition-colors cursor-pointer rounded-md",
            { "bg-gray-300": asc }
          )}>ASC</div>
        <div
          onClick={handleDes}
          className={clsx(
            "flex py-2 px-3 border border-transparent hover:border-black mt-1 transition-colors cursor-pointer rounded-md",
            { "bg-gray-300": des }
          )}>DESC</div>
      </div>
    </details>
  );
}