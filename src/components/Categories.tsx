"use client"

import { Disclosure } from "@headlessui/react";
import HeaderItem from "./HeaderItem";
import { CaretRight } from "@phosphor-icons/react";
import { useState } from "react";
import Link from "next/link";


const Categories = ({data}: any) => {
  const [dataCategories, setDataCategories] = useState([])
  let categories = data.map((item: any) => item.tags);
  let uniqueCategories = categories.flat().filter((item: any, index: any) => {
    const unique = categories.flat().indexOf(item) === index;
    return unique;
  });


    const newData: any = []
   const filterUnique = uniqueCategories.forEach((item: any) => {
      const filter = data.filter((item2: any) => item2.tags.includes(item))
      newData.push({
        category: item,
        title: filter.map((item3: any) => {return {title: item3.title, id: item3.id}})})
    })

  return (
    <div>
      <HeaderItem title="Categorias" />

      <div className="max-w-[361px]">
        {newData.map((item: any, index: number) => (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg duration-300 bg-white px-4 py-2 text-left text-sm font-medium text-gray-800 hover:bg-emerald-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    {item.category.charAt(0).toUpperCase() +
                      item.category.slice(1)}
                  </span>
                  <CaretRight
                    size={26}
                    weight="bold"
                    className={`${
                      open ? "rotate-90 transform" : ""
                    } h-5 w-5 text-gray-800`}
                  />
                </Disclosure.Button>
                {item.title.map((item2: any, index2: number) => (
                  <Disclosure.Panel
                    key={index2}
                    className="px-4 pt-4 pb-2 text-sm text-gray-500"
                  >
                    <div>
                      <Link href={`/blog/${item2.id}`} className="hover:text-emerald-600">
                        {item2.title}
                      </Link>
                    </div>
                  </Disclosure.Panel>
                ))}
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}

export default Categories;