export async function getPosts() {
  const [postsAll, usersAll] = await Promise.all([
    fetch("https://dummyjson.com/posts"),
    fetch("https://dummyjson.com/users"),
  ]).then((responses) => Promise.all(responses.map((res) => res.json())));

  const { posts } = await postsAll;
  const { users } = await usersAll;

  const data = posts.map((post: any) => {
    const user = users.find((user: any) => user.id === post.userId);

    let dataInicial = new Date("2021-01-01");
    let dataFinal = new Date("2023-12-31");

    let timestamp =
      dataInicial.getTime() +
      Math.random() * (dataFinal.getTime() - dataInicial.getTime());

    let dataAleatoria = new Date(timestamp);
    let dataPtBr = dataAleatoria.toLocaleDateString("pt-BR");

    if (user) {
      return {
        ...post,
        name: user.firstName,
        datePost: dataPtBr,
      };
    }

    return post;
  });

  return data;
}