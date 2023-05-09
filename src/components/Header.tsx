'use client';

import { MagnifyingGlass } from "@phosphor-icons/react";

const Header = () => {
  return (
    <header className="bg-emerald-600 flex h-16 justify-center items-center relative">
      <h1 className="text-white font-bold text-3xl">Blog Tech</h1>

      <form className="absolute right-[20%] flex items-center gap-x-1 h-8">
        <input className="p-1 h-full rounded-md outline-none focus:outline-2 border-none focus:outline-emerald-900 " 
        type="text" placeholder="Buscar Post" />
        <div className="p-2 bg-emerald-800 rounded-md h-full">
          <MagnifyingGlass className="text-white" size={20} weight="bold" />
        </div>
      </form>
    </header>
  );
}

export default Header;