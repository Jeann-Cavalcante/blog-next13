export type Post = {
  id: string;
  userId: string;
  title: string;
  body: string;
  name?: string;
  datePost?: string;
  tags: string[];
};

export type GetPosts = {
  posts: Post[];
};

export type PostId = {
  id: string;
  title: string;
  body: string;
}

export type User = {
  id: string;
  firstName: string;
};

export type HeaderTitleProps = {
  title: string;
  subtitle?: string;
};
