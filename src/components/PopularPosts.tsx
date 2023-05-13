import { getPosts } from "@/utils/getPosts";
import CardPosts from "./CardPosts";
import HeaderItem from "./HeaderItem";
import Link from "next/link";

const PopularPosts = ({ data }: any) => {
  const data1 = getPosts();
  let popularPosts = [];
  for (let i = 0; i < 3; i++) {
    const aleatory = Math.floor(Math.random() * data.length);
    popularPosts.push(data[aleatory]);
  }
  let dataInicial = new Date("2021-01-01");
  let dataFinal = new Date("2023-12-31");

  let timestamp =
    dataInicial.getTime() +
    Math.random() * (dataFinal.getTime() - dataInicial.getTime());

  let dataAleatoria = new Date(timestamp);

  return (
    <aside id="container-popular" className="w-[380px]">
      <HeaderItem title="Popular Posts" />
      <div className="flex flex-col gap-y-4">
        {popularPosts?.map((post: any) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <div className="flex w-full bg-white shadow-xl items-center p-2 rounded-md">
              <div className="bg-gray-400 h-20 min-w-[132px] rounded-md"></div>
              <div className="p-1 flex flex-col justify-between">
                <h1 className="leading-5 font-bold">{post?.title}</h1>
                <h2 className="text-gray-800 text-sm">
                  {new Intl.DateTimeFormat("pt-BR").format(dataAleatoria)}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default PopularPosts;
