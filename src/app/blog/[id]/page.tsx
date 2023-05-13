import Categories from "@/components/Categories";
import PopularPosts from "@/components/PopularPosts";
import { getPosts } from "@/utils/getPosts";

const Blog = async ({params}: {params: {id: string}}) => {
  console.log(params.id);

  const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const post = await response.json();
  console.log(post);

  const {postsAll} = await getPosts();
  console.log(postsAll.posts);

  return (
    <div className="max-w-[1200px] mx-auto flex mt-8 justify-between">
      <div className="max-w-[744px] ">
        <h1 className="font-bold text-xl mb-4"> {post.title}</h1>
        <p>{post.body}</p>
      </div>
      <div className="pb-20 flex flex-col gap-y-8">
        <PopularPosts data={postsAll.posts} />
        <Categories data={postsAll.posts} />
      </div>
    </div>
  );
};

export default Blog;
