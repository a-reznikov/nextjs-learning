export type ImageAttributes = {
  name: string;
  url: string;
};

export type ImageData = {
  attributes: ImageAttributes;
};

export type StoryImage = {
  data: ImageData;
};

export type StoryAttributes = {
  title: string;
  description: string;
  content: string;
  date: string;
  image: StoryImage;
};

export type StoryRaw = {
  id: number;
  attributes: StoryAttributes;
};

export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type Meta = {
  pagination: Pagination;
};

export type StoriesResponse = {
  data: StoryRaw[];
  meta: Meta;
};

export type Story = {
  id: number;
  title: string;
  description: string;
  content: string;
  date: string;
  imgUrl: string;
  imgAlt: string;
};
