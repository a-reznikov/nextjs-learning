export type NewsImage = {
  url: string;
  caption: string;
};

export type NewsRaw = {
  section: string;
  published_date: string;
  title: string;
  abstract: string;
  uri: string;
  multimedia: NewsImage[];
};

export type NycTimesResponse = {
  results: NewsRaw[];
};

export type News = {
  section: string;
  date: string;
  title: string;
  abstract: string;
  uri: string;
  imgUrl: string;
  imgAlt: string;
};
