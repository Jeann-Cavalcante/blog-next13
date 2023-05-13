import { Post } from "@/@types";
import CardPosts from "@/components/CardPosts";
import Categories from "@/components/Categories";
import HeroCarousel from "@/components/HeroCarousel";
import PopularPosts from "@/components/PopularPosts";

export default async function Home() {
  const [postsAll, usersAll] = await Promise.all([
    fetch("https://dummyjson.com/posts"),
    fetch("https://dummyjson.com/users"),
  ]).then((responses) => Promise.all(responses.map((res) => res.json())));

  const { posts } = await postsAll;
  const { users } = await usersAll;

  const data = posts.map((post: Post) => {
    const user = users.find((user: any) => user.id === post.userId);

    if (user) {
      return {
        ...post,
        name: user.firstName,
      };
    }

    return post;
  });

  return (
    <main className="max-w-[1200px] mx-auto pb-16 pt-14 px-1 flex justify-between">
      <div className="content max-w-[744px]">
        <HeroCarousel />
        <CardPosts data={data} />
      </div>
      <div className="pb-20 flex flex-col gap-y-8">
        <PopularPosts data={postsAll.posts} />
        <Categories data={postsAll.posts} />
      </div>
    </main>
  );
}
