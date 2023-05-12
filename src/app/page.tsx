import { Post } from "@/@types";
import CardPosts from "@/components/CardPosts";
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
    <main className="max-w-[800px] mx-auto pb-16 pt-14 px-1">
      <HeroCarousel />
      <CardPosts data={data} />
    </main>
  )
}
