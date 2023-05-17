"use client";

import { List, MagnifyingGlass } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import MenuHeader from "./Menu";
import SearchForm from "./SearchForm";

const Header = () => {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    console.log(search);
    router.push(`/search/${search}`);
    setSearch("");
  };
  return (
    <div className="h-16">
      <header className="bg-emerald-600 flex h-16 lg:justify-around justify-between items-center px-5 fixed w-full top-0 z-10">
        <Link className="" href="/">
          <h1 className="text-white font-bold text-3xl">Blog Tech</h1>
        </Link>
        <div className="hidden md:flex">
          <SearchForm
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onSubmit={handleSearch}
          />
        </div>

        <div className="flex md:hidden">
          <MenuHeader>
            <SearchForm
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onSubmit={handleSearch}
            />
          </MenuHeader>
        </div>
      </header>
    </div>
  );
};

export default Header;
