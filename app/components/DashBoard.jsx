"use client"
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { NotesIcon } from "./icons/NotesIcon";
import { TaskIcon } from "./icons/TaskIcon";
import { SettingsIcon } from "./icons/SettingIcon";
import { SunIcon } from "./icons/SunIcon";
import { MoonIcon } from "./icons/MoonIcon";
import { useState, useEffect } from "react";

export function DashBoard() {
  const pathName = usePathname();
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <nav className="h-full flex lg:flex-col items-center lg:items-stretch justify-between">
      <ul className="flex flex-row items-center lg:items-stretch lg:flex-col gap-2 *:p-2 *:rounded-md">
        <li>
          <Link href={"/"} className="flex items-center">
            <h1 className="text-2xl hidden lg:block">Task APP</h1>
          </Link>
        </li>
        <li className={clsx({ "bg-neutral-300": pathName == "/notes" })}>
          <Link href={"/notes"} className="flex items-center gap-2">
            <NotesIcon />
            <h2>Notes</h2>
          </Link>
        </li>
        <li className={clsx({ "bg-neutral-300": pathName == "/todo" })}>
          <Link href={"/todo"} className="flex items-center gap-2">
            <TaskIcon />
            <h2>ToDo</h2>
          </Link>
        </li>
      </ul>
      <ul className="flex flex-row items-center lg:items-stretch lg:flex-col gap-2 *:p-2 *:rounded-md">
        <li onClick={() => setDarkTheme(!darkTheme)} className="cursor-pointer">
          <div className="flex items-center gap-2 select-none">
            {darkTheme ? <MoonIcon /> : <SunIcon />}
            {darkTheme ? <h2>Dark</h2> : <h2>Light</h2>}
          </div>
        </li>
        <li className={clsx({ "bg-neutral-300": pathName == "/settings" })}>
          <Link href="/settings" className="flex items-center gap-2">
            <SettingsIcon />
            <h2>Settings</h2>
          </Link>
        </li>
      </ul>
    </nav>
  );
}