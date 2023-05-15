import { Post } from "@/@types";
import CardPosts from "@/components/CardPosts";
import Categories from "@/components/Categories";
import HeroCarousel from "@/components/HeroCarousel";
import PopularPosts from "@/components/PopularPosts";
import { getPosts } from "@/utils/getPosts";

export default async function Home() {
  // const [postsAll, usersAll] = await Promise.all([
  //   fetch("https://dummyjson.com/posts"),
  //   fetch("https://dummyjson.com/users"),
  // ]).then((responses) => Promise.all(responses.map((res) => res.json())));

  const data = await getPosts();

  // const { posts } = await postsAll;
  // const { users } = await usersAll;

  // const data = posts.map((post: Post) => {
  //   const user = users.find((user: any) => user.id === post.userId);

  //   let dataInicial = new Date("2021-01-01");
  //   let dataFinal = new Date("2023-12-31");

  //   let timestamp =
  //     dataInicial.getTime() +
  //     Math.random() * (dataFinal.getTime() - dataInicial.getTime());

  //   let dataAleatoria = new Date(timestamp);

  //   if (user) {
  //     return {
  //       ...post,
  //       name: user.firstName,
  //       date: dataAleatoria,
  //     };
  //   }

  //   return post;
  // });

  return (
    <main className="">
      <div className="content max-w-[744px]">
        <HeroCarousel />
        <CardPosts data={data} />
      </div>
      
    </main>
  );
}
