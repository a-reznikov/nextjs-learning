export type ArticleImages = {
  caption: string;
  url: string;
  width: number;
};

type Headline = {
  main: string;
};

export type ArticleRaw = {
  abstract: string;
  headline: Headline;
  pub_date: string;
  section_name: string;
  lead_paragraph: string;
  uri: string;
  multimedia: ArticleImages[];
};

export type ArticlesDocs = {
  docs: ArticleRaw[];
};

export type ArticlesResponse = {
  response: ArticlesDocs;
  status: string;
};

export type Article = {
  abstract: string;
  title: string;
  date: string;
  section: string;
  paragraph: string;
  uri: string;
  imgUrl: string;
  imgAlt: string;
};
