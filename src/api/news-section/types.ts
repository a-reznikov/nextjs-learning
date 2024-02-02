export interface NewsImage {
  url: string;
  type: string;
}

export interface RawNews {
  section: string;
  updated_date: string;
  title: string;
  abstract: string;
  uri: string;
  multimedia: NewsImage[];
}

export interface Data {
  results: RawNews[];
}

export interface News {
  section: string;
  date: string;
  title: string;
  abstract: string;
  uri: string;
  imgUrl: string;
  imgAlt: string;
}
