import CardPosts from "@/components/CardPosts";
import PopularPosts from "@/components/PopularPosts";

export default function Home() {
  return (
    <main className="max-w-[800px] mx-auto pb-16 pt-14 px-1">
      <PopularPosts />
      <CardPosts />
    </main>
  )
}
