export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
};

export type GetPosts = {
  posts: Post[];
};
