import Categories from "@/components/Categories";
import PopularPosts from "@/components/PopularPosts";
import { getPosts } from "@/utils/getPosts";

const Blog = async ({params}: {params: {id: string}}) => {
  console.log(params.id);

  const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const post = await response.json();
  console.log(post);

  const data = await getPosts();
  console.log(post);

  return (
    
      <div className="max-w-[744px] ">
        <h1 className="font-bold text-xl mb-4"> {post.title}</h1>
        <p>{post.body}</p>
      </div>
      
    
  );
};

export default Blog;
