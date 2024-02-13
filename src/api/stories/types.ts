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
  date: string;
  image: StoryImage;
};

export type StoryRaw = {
  id: number;
  attributes: StoryAttributes;
};

export type StoriesResponse = {
  data: StoryRaw[];
};

export type Story = {
  id: number;
  title: string;
  description: string;
  date: string;
  imgUrl: string;
  imgAlt: string;
};
