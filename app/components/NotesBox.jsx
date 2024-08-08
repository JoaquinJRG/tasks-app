import { Note } from "./Note";

export function NotesBox({ filterList }) {

  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-4">
      {
        filterList.map((note) => (
          <Note
            key={note.id}
            note={note}
          />
        ))
      }
    </div>
  );
}