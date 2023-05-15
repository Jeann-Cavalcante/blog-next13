'use client';

import { MagnifyingGlass } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState('');
  return (
    <header className="bg-emerald-600 flex h-16 justify-center items-center relative">
      <Link href="/">
        <h1 className="text-white font-bold text-3xl">Blog Tech</h1>
      </Link>

      <form className="absolute md:right-1  xl:right-[20%] hidden md:flex items-center gap-x-1 h-8">
        <input
          className="p-1 h-full rounded-md outline-none focus:outline-2 border-none focus:outline-emerald-900 "
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar Post"
        />
          <Link href={`/search/${search}`}>
        <div className="p-2 cursor-pointer bg-emerald-800 rounded-md h-full">
            <MagnifyingGlass className="text-white" size={20} weight="bold" />
        </div>
          </Link>
      </form>
    </header>
  );
}

export default Header;