'use client'

import { Menu } from "@headlessui/react";
import { List, X } from "@phosphor-icons/react";
import SearchForm from "./SearchForm";
import { ReactNode, useEffect, useState } from "react";
import { Navbar } from "flowbite-react";
import { usePathname } from "next/navigation";


type MenuHeaderProps = {
  children?: ReactNode;
}

const MenuHeader = ({ children }: MenuHeaderProps) => {
  const [open, setOpen] = useState(false);
  const router = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [router]);
  return (
    <div>
      
      <div onClick={()=> setOpen(!open)} className="p-2 cursor-pointer bg-emerald-800 rounded-md">
          {!open ? (
            <List className="text-white" size={20} weight="bold" />
          ) : (
            <X className="text-white" size={20} weight="bold" />
          )}
      </div>

      {open && (
        <div className="bg-emerald-600 flex flex-col items-center pt-10 absolute left-0 w-full h-screen">
          {children}
        </div>
      )}
    </div>
  );
};

export default MenuHeader;
