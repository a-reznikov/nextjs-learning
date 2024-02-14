import { formateDate } from "@/utils/formatter-date";
import { STRAPI_BASE_URL } from "@/constants/variables";
import { StoryRaw } from "./types";

export const prepareStory = (data: StoryRaw) => {
  const { id, attributes } = data;
  const { title, description, content, date, image } = attributes;
  const {
    data: {
      attributes: { name, url },
    },
  } = image;

  return {
    id,
    title,
    description,
    content,
    date: formateDate(date),
    imgUrl: `${STRAPI_BASE_URL}${url}`,
    imgAlt: name,
  };
};

export const prepareStories = (data: StoryRaw[]) => {
  return data.map((story) => prepareStory(story));
};
