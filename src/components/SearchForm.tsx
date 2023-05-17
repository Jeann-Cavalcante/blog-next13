'use client'

import { MagnifyingGlass } from "@phosphor-icons/react";

type SearchFormProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;

}

const SearchForm = (props: SearchFormProps) => {
  return (
    <form onSubmit={props.onSubmit} className="flex items-center gap-x-1 h-8 order-3">
      <input
        className="p-1 h-full rounded-md pl-2 outline-none focus:outline-2 border-none focus:outline-emerald-900 md:w-80 w-full"
        type="text"
        placeholder="Buscar Post"
        value={props.value}
        onChange={props.onChange}
      />
      <button >
        <div className="p-2 cursor-pointer bg-emerald-800 rounded-md h-full">
          <MagnifyingGlass className="text-white" size={20} weight="bold" />
        </div>
      </button>
    </form>
  );
}

export default SearchForm;