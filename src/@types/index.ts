export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  name?: string;
};

export type GetPosts = {
  posts: Post[];
};

export type HeaderTitleProps = {
  title: string;
  subtitle?: string;
};