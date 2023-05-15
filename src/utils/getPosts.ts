import { Post, User } from "@/@types";

export async function getPosts(): Promise<Post[]> {
  const [postsAll, usersAll] = await Promise.all([
    fetch("https://dummyjson.com/posts"),
    fetch("https://dummyjson.com/users"),
  ]).then((responses) => Promise.all(responses.map((res) => res.json())));

  const { posts } = await postsAll;
  const { users } = await usersAll;

  const data: Post[] = posts.map((post: Post) => {
    const user = users.find((user: User) => user.id === post.userId);

    let dataInicial = new Date("2021-01-01");
    let dataFinal = new Date("2023-12-31");

    let timestamp =
      dataInicial.getTime() +
      Math.random() * (dataFinal.getTime() - dataInicial.getTime());

    let dataAleatoria = new Date(timestamp);
    let dataPtBr = dataAleatoria.toLocaleDateString("pt-BR");

    if (user) {
      return {
        name: user.firstName,
        datePost: dataPtBr,
        title: post.title,
        body: post.body,
        tags: post.tags,
        id: post.id,
        userId: post.userId
      };
    }

    return post;
  });

  return data;
}