"use client"
import { useState } from "react";
import { Card } from "./Card";
import { CardModal } from "./CardModal";
import { CardClass } from "../lib/cards";

export function CardColumn({ cards, setCard, column, isDragging, handleDragging, handleUpdateList }) {

  const [showModal, setShowModal] = useState(false);

  const filterCards = cards.filter((card) => card.column === column);

  const handleDrop = (e) => {
    e.preventDefault();
    const [id, title] = e.dataTransfer.getData('text').split(",");
    handleUpdateList(id, title, column);
    handleDragging(false);
  };

  const handleDragOver = (e) => e.preventDefault();
  const createItem = async (title) => {
    const newCards = await CardClass.create(title, column);
    setCard([...newCards]);
  };


  return (
    <>
      {showModal && <CardModal closeModal={setShowModal} createItem={createItem} />}
      <div
        className={`p-3 flex-1 rounded-md border-2 border-[#a688fa] bg-neutral-100 dark:bg-[#1a1625] select-none ${isDragging ? "border-dashed" : ""}`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <header className="flex items-center justify-between border-b border-[#a688fa] pb-2">
          <h2>{column}</h2>
          <span className="flex items-center justify-center w-7 h-7 rounded-full dark:bg-black">{filterCards.length}</span>
        </header>
        <main
          className="flex flex-col gap-3 pt-3"
        >
          {
            filterCards.map((card) => (
              <Card
                key={card.id}
                data={card}
                handleDragging={handleDragging}
              />
            ))
          }
        </main>
        <footer
          onClick={() => setShowModal(true)}
          className="border border-[#a688fa] p-2 rounded-md cursor-pointer mt-3 text-[#a688fa]"
        >
          + Nuevo ítem
        </footer>
      </div>
    </>
  );
}