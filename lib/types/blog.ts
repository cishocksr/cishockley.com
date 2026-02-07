export type BlogPost = {
  title: string;
  slug: string;
  date: string;
  description?: string;
  published: boolean;
  tags?: string[];
  body: string;
  excerpt: string;
  metadata: {
    readingTime: number;
    wordCount: number;
  };
  toc: TOCItem[];
  permalink: string;
};

export type TOCItem = {
  title: string;
  url: string;
  items: TOCItem[];
};
