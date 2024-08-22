"use client"
import { useState, useContext, useEffect } from "react";
import clsx from "clsx";
import { colors } from "../lib/colors";
import { NotesClass } from "../lib/notes";
import { NotesContext } from "../notes/page";

export function NotesModal({ id, ptitle = "", ptext = "", pcolor = "#FEC871", closeModal, edit = false }) {

  const [title, setTitle] = useState(ptitle);
  const [text, setText] = useState(ptext);
  const [colorSelect, setColor] = useState(pcolor);
  const { setNotesList, setFilterList } = useContext(NotesContext);

  const handleSave = async () => {
    if (!title || !text || !colorSelect) return;

    const newNotes = await NotesClass.add(title, text, colorSelect);
    setNotesList([...newNotes]);
    setFilterList([...newNotes]);
    closeModal(false);
  };

  const handleEdit = async () => {

    const newNotes = await NotesClass.edit(id, title, text, colorSelect);
    setNotesList([...newNotes]);
    setFilterList([...newNotes]);
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
    <div className="h-full w-full flex items-center justify-center absolute top-0 right-0 bg-black/40 z-10">
      <div className="flex flex-col gap-3 rounded-md p-3 shadow-md w-80" style={{ backgroundColor: colorSelect }}>
        <main className="flex flex-col gap-2">
          <input
            type="text"
            value={title}
            placeholder="Titulo"
            style={{ backgroundColor: colorSelect }}
            className="px-2 py-1 rounded-md placeholder:text-black outline-none text-xl font-semibold"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            type="text"
            value={text}
            placeholder="Añade una nota ..."
            className="px-2 py-1 rounded-md placeholder:text-black h-36 max-h-60 outline-none"
            style={{ backgroundColor: colorSelect }}
            required
            onChange={(e) => setText(e.target.value)}
          />
        </main>
        <nav className="flex gap-1">
          {
            colors.map((color, index) => (
              <div
                key={index}
                onClick={() => setColor(color)}
                style={{ background: color }}
                className={clsx("w-10 h-10 rounded-md cursor-pointer",
                  { "border-2 border-[#a688fa]": colorSelect === color }
                )}></div>
            ))
          }
        </nav>
        <footer className="flex items-center justify-start gap-2 mt-5">
          <button className=" rounded-md px-3 py-1 bg-[#a688fa] text-white dark:text-black" onClick={() => closeModal(false)}>Cerrar</button>
          <button className="rounded-md px-3 py-1 bg-[#a688fa] text-white dark:text-black" onClick={edit ? handleEdit : handleSave}>Guardar</button>
        </footer>
      </div>
    </div>
  );
}