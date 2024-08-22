import { CardClass } from "../lib/cards";
import { TrashIcon } from "./icons/TrashIcons";

export function Card({ data, handleDragging, setCards }) {

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text', `${data.id},${data.title}`);
    handleDragging(true);
  };
  const handleDragEnd = () => handleDragging(false);

  const handleDelete = () => {
    const newCards = CardClass.delete(data.id);
    setCards([...newCards]);
  };

  return (
    <div
      className="flex items-center justify-between p-3 bg-white dark:bg-[#2f2b3a] rounded-md shadow-sm cursor-grab"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <p>{data.title}</p>
      <button
        onClick={handleDelete}
        className="hover:scale-125 transition-transform text-[#a688fa]"
      >
        <TrashIcon />
      </button>
    </div>
  );
} 