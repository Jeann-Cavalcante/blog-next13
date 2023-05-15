"use client"

import { Disclosure } from "@headlessui/react";
import HeaderItem from "./HeaderItem";
import { CaretRight } from "@phosphor-icons/react";
import Link from "next/link";
import { Post } from "@/@types";

type Props = {
  data: Post[];
};

type Title = {
  title: string;
  id: number;
}

type Category = {
  title: Title[];
  category: string;
};

const Categories = ({ data }: Props) => {
  let categories = data.map((item) => item.tags);
  let uniqueCategories = categories.flat().filter((item: string, index: number) => {
    const unique = categories.flat().indexOf(item) === index;
    return unique;
  });

  const newData: Category[] = [];
 uniqueCategories.map((item: string) => {
    const filter: Post[] = data.filter((tag: Post) => tag.tags.includes(item));
    newData.push({
      category: item,
      title: filter.map((categories: Post) => {
        return { title: categories.title, id: Number(categories.id) };
      }),
    });
  });


  return (
    <div>
      <HeaderItem title="Categorias" />

      <div className="max-w-[361px]">
        {newData.map((item: Category, index: number) => (
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
                {item.title.map((text: Title, indexKey: number) => (
                  <Disclosure.Panel
                    key={indexKey}
                    className="px-4 pt-4 pb-2 text-sm text-gray-500"
                  >
                    <div>
                      <Link
                        href={`/blog/${text.id}`}
                        className="hover:text-emerald-600"
                      >
                        {text.title}
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
};

export default Categories;