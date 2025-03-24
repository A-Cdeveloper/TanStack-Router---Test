export type News = {
  id: number;
  title: string;
  body: string;
  authorId: number;
};

export type Author = {
  id: number;
  fullName: string;
  email: string;
};
