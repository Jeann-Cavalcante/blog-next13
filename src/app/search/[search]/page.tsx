import CardPosts from "@/components/CardPosts";
import { getPosts } from "@/utils/getPosts";

const page = async ({params}: {params: {search: string}}) => {
  const data = await getPosts();
  const paramsSearch = params.search.replace(/%20/g, " ");

  const result = data.filter((post: any) => {
    const title = post.title = post.title.toLowerCase();
    const paramsSearchLowerCase = paramsSearch.toLowerCase();
    return title.includes(paramsSearchLowerCase);
  });

  console.log(result);
  return (
    <div className="mb-16 w-full max-w-[744px] p-2">
      <p>
        Busca por: <strong>{paramsSearch}</strong>
      </p>
      <CardPosts data={result} title="Resultado da busca" />
    </div>
  );
}

export default page;