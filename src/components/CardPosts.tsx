import { GetPosts, Post } from "@/@types";
import Link from "next/link";

const CardPosts = async () => {
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

  // const res = await fetch("https://dummyjson.com/posts");
  // const data = await res.json();
  // const { posts }: GetPosts = postsAll;

  console.log(data);
  const limitBody: number = 100;

  return (
    <div className="w-full flex flex-wrap justify-between gap-4">
      {data?.map((post: any) => (
        <Link href={`/blog/${post.id}`} key={post.id}>
        <div
          className="bg-white rounded-md shadow-xl w-[390px] max-h-[450px] h-[450px] overflow-hidden"
        >
          <div className="bg-gray-400 h-40 rounded-md">1</div>
          <div id="teste" className="p-1 flex flex-col gap-y-2 ">
            <div>
              <h1 className="text-lg leading-4 font-bold">{post.title}</h1>
              <h2 className="text-sm font-semibold ">
                By:{" "}
                <span className="font-normal text-gray-800">
                  {" "}
                  {post.name ?? "Anonimo"}
                </span>
              </h2>
            </div>
            <p className="overflow-hidden text-gray-500 text-sm">
              {post.body.length > limitBody
                ? post.body.slice(0, limitBody) + "..."
                : post.body}
            </p>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default CardPosts;
