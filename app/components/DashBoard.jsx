"use client"
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { NotesIcon } from "./icons/NotesIcon";
import { TaskIcon } from "./icons/TaskIcon";
import { SunIcon } from "./icons/SunIcon";
import { MoonIcon } from "./icons/MoonIcon";
import { useEffect, useState } from "react";
import { HomeIcon } from "./icons/HomeIcon";

export function DashBoard() {
  const pathName = usePathname();
  const [theme, setTheme] = useState();

  useEffect(() => {
    const newtheme = localStorage.getItem('theme');
    if (newtheme === 'dark') {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  }

  return (
    <nav className="h-full flex lg:flex-col items-center lg:items-stretch justify-between">
      <ul className="flex flex-row items-center lg:items-stretch lg:flex-col gap-2 *:p-2 *:rounded-md">
        <li className={clsx({ "bg-[#ba9ffb] text-black lg:text-[#ba9ffb] lg:bg-neutral-200 dark:lg:bg-[#46424f]": pathName == "/" })}>
          <Link href={"/"} className="flex items-center">
            <div className="block lg:hidden">
              <HomeIcon />
            </div>
            <h1 className="text-2xl hidden lg:block">Task APP</h1>
          </Link>
        </li>
        <li className={clsx("border border-transparent hover:border-[#ba9ffb] transition-colors", { "bg-[#ba9ffb] text-black": pathName == "/notes" })}>
          <Link href={"/notes"} className="flex items-center gap-2">
            <NotesIcon />
            <h2 className="hidden lg:block">Notas</h2>
          </Link>
        </li>
        <li className={clsx("border border-transparent hover:border-[#ba9ffb] transition-colors", { "bg-[#ba9ffb] text-black": pathName == "/todo" })}>
          <Link href={"/todo"} className="flex items-center gap-2">
            <TaskIcon />
            <h2 className="hidden lg:block">Tareas</h2>
          </Link>
        </li>
      </ul>
      <ul className="flex flex-row items-center lg:items-stretch lg:flex-col gap-2 *:p-2 *:rounded-md">
        <li onClick={toggleTheme} className="cursor-pointer border border-transparent hover:border-[#ba9ffb] transition-colors">
          <div className="flex items-center gap-2 select-none">
            {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
            {theme === 'dark' ? <h2 className="hidden lg:block">Oscuro</h2> : <h2 className="hidden lg:block">Claro</h2>}
          </div>
        </li>
      </ul>
    </nav>
  );
}