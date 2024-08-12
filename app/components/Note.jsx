"use client";

import { NotesClass } from "../lib/notes";
import { EditIcon } from "./icons/EditIcon";
import { TrashIcon } from "./icons/TrashIcons";
import { NotesContext } from "../notes/page";
import { useContext, useState } from "react";
import { NotesModal } from "./NotesModal";

export function Note({ note }) {

  const date = new Date(note.date);
  const formatedDate = date.toLocaleDateString("es-ES", {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const { setNotesList, setFilterList } = useContext(NotesContext);

  const handleDelete = async () => {
    const newNotes = await NotesClass.delete(note.id);
    setNotesList([...newNotes]);
    setFilterList([...newNotes]);
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal &&
        <NotesModal
          id={note.id}
          ptitle={note.title}
          ptext={note.text}
          pcolor={note.color}
          closeModal={setShowModal}
          edit={true}
        />
      }
      <div
        style={{ backgroundColor: note.color }}
        className="w-64 h-64 rounded-md p-4 shadow-md flex flex-col gap-1"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">{note.title}</h1>
          <button className="hover:scale-125 transition-transform" onClick={handleDelete}>
            <TrashIcon />
          </button>
        </div>
        <p className="flex-1">{note.text}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs">{formatedDate}</span>
          <button
            onClick={() => setShowModal(true)}
            className="hover:scale-125 transition-transform"
          >
            <EditIcon />
          </button>
        </div>
      </div>
    </>
  );
}