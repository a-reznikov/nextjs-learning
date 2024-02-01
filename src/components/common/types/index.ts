export interface NewsImage {
  height: number;
  url: string;
  type: string;
}

export interface News {
  section: string;
  updated_date: string;
  title: string;
  abstract: string;
  uri: string;
  multimedia: NewsImage[];
}

export interface Data {
  results: News[];
}
