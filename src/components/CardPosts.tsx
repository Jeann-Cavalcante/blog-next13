import { GetPosts, Post } from "@/@types";
import Link from "next/link";
import HeaderItem from "./HeaderItem";

const CardPosts = ({ data }: any) => {
  
  console.log(data);
  const limitBody: number = 100;

  return (
    <div className="w-full flex flex-col ">
      <HeaderItem title="Blog Tech" subtitle="Todos conteúdos" />
      <div className="flex flex-wrap md:justify-between gap-x-2 gap-y-4 justify-center">
        {data?.map((post: Post) => (
          <Link href={`/blog/${post.id}`} key={post.id}>
            <div className="bg-white rounded-md shadow-xl w-[390px] max-h-[450px] h-[450px] overflow-hidden duration-300 hover:-translate-y-1">
              <div className="bg-gray-400 h-40 rounded-md">1</div>
              <div id="teste" className="p-1 flex flex-col gap-y-2 ">
                <div>
                  <h1 className="text-lg leading-4 font-bold">{post.title}</h1>
                  <h2 className="text-sm font-semibold ">
                    By:{" "}
                    <span className="font-normal text-gray-800">
                      {" "}
                      {post.name ?? "Anonimo"}
                    </span>
                  </h2>
                </div>
                <p className="overflow-hidden text-gray-500 text-sm">
                  {post.body.length > limitBody
                    ? post.body.slice(0, limitBody) + "..."
                    : post.body}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardPosts;
