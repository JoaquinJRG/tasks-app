"use client"
import { SearchBar } from "../components/SearchBar";

export default function Todo() {

  const searchFunction = (text) => {
    console.log(text);
  };

  return (
    <>
      <header className="flex items-center gap-3">
        <button
          className="min-w-10 min-h-10 bg-black text-white rounded-md text-xl shadow-sm"
        >+</button>
        <SearchBar searchFunction={searchFunction} />
      </header>
      <main>
        <h1 className="text-3xl lg:text-5xl my-5">To Do</h1>
      </main>
    </>
  );
}
