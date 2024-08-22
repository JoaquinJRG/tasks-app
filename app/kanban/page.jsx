"use client"
import { useState, useEffect } from "react";
import { CardColumn } from "../components/CardColum";
import { CardClass } from "../lib/cards";

export default function KanbanPage() {

  const [isDragging, setIsDragging] = useState(false);
  const [cards, setCard] = useState([]);

  useEffect(() => {

    const fetchCards = async () => {
      const cards = await CardClass.getAll();
      setCard([...cards]);
    };

    fetchCards();
  }, []);

  const handleDragging = (dragging) => setIsDragging(dragging);
  const handleUpdateList = (id, title, newColumn) => {

    const newCards = CardClass.update(id, title, newColumn);
    setCard([...newCards]);
  };


  return (
    <>
      <h1 className="text-3xl lg:text-5xl my-5 dark:text-white">Kanban</h1>
      <main className="flex flex-col lg:flex-row gap-3 lg:gap-4 dark:text-white">
        <CardColumn
          cards={cards}
          setCard={setCard}
          column={"Sin empezar"}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
        <CardColumn
          cards={cards}
          setCard={setCard}
          column={"En curso"}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
        <CardColumn
          cards={cards}
          setCard={setCard}
          column={"Listo"}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
      </main>
    </>

  );
}
