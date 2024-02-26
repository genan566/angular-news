export type SOURCE = {
  id: string | null;
  name: string;
};

export interface News {
  source: SOURCE;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
}
