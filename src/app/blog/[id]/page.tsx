import { PostId } from "@/@types";

const Blog = async ({params}: {params: {id: string}}) => {

  const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const post: PostId = await response.json();

  return (
    
      <div className="max-w-[744px] ">
        <h1 className="font-bold text-xl mb-4"> {post.title}</h1>
        <p>{post.body}</p>
      </div>
      
    
  );
};

export default Blog;
