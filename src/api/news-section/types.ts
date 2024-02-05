export type NewsImage = {
  url: string;
  type: string;
};

export type NewsRaw = {
  section: string;
  updated_date: string;
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
