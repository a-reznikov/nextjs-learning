import { formateDate } from "@/utils/formatter-date";
import { STRAPI_BASE_URL } from "@/constants/variables";
import { StoryRaw } from "./types";

export const prepareStories = (data: StoryRaw[]) => {
  console.log(data);

  return data.map(({ id, attributes }) => {
    const { title, description, date, image } = attributes;
    const {
      data: {
        attributes: { name, url },
      },
    } = image;

    return {
      id,
      title,
      description,
      date: formateDate(date),
      imgUrl: `${STRAPI_BASE_URL}${url}`,
      imgAlt: name,
    };
  });
};
