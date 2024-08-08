"use client"
import { useState, useEffect, createContext } from "react";
import { SearchBar } from "../components/SearchBar";
import { NotesClass } from "../lib/notes";
import { NotesBox } from "../components/NotesBox";
import { NotesModal } from "../components/NotesModal";


export const NotesContext = createContext();

export default function Notes() {

  const [notesList, setNotesList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {

    const fetchNotes = async () => {
      const notes = await NotesClass.getAll();
      setNotesList([...notes]);
      setFilterList([...notes]);
    };

    fetchNotes();
  }, []);

  const searchFunction = (text) => {
    const newFilterList = NotesClass.searchNote(text);
    setFilterList(newFilterList);
  };

  return (
    <NotesContext.Provider value={{ setNotesList, setFilterList }}>
      {showModal && <NotesModal closeModal={setShowModal} />}
      <header className="flex items-center gap-3">
        <button
          onClick={() => setShowModal(true)}
          className="min-w-10 min-h-10 bg-black text-white rounded-md text-xl shadow-sm"
        >+</button>
        <SearchBar searchFunction={searchFunction} />
        <div>
          filtros
        </div>
      </header>
      <main>
        <h1 className="text-3xl lg:text-5xl my-5">Notes</h1>
        <NotesBox filterList={filterList} />
      </main>
    </NotesContext.Provider>
  );
}
