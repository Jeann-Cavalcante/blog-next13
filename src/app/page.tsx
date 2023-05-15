import CardPosts from "@/components/CardPosts";
import HeroCarousel from "@/components/HeroCarousel";
import { getPosts } from "@/utils/getPosts";

export default async function Home() {
  const data = await getPosts();

  return (
    <main>
      <div className="max-w-[744px]">
        <HeroCarousel />
        <CardPosts data={data} />
      </div>
      
    </main>
  );
}
