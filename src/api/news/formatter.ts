import { formateDate } from "@/utils/formatter-date";
import { News, NewsRaw } from "./types";

export const prepareData = (data: NewsRaw[]): News[] => {
  return data.map(
    ({ section, published_date, title, abstract, uri, multimedia }) => {
      return {
        section: section ? section : "general",
        date: formateDate(published_date),
        title,
        abstract,
        uri,
        imgUrl:
          multimedia && multimedia.length
            ? multimedia[0].url
            : "/backgrounds/news.jpg",
        imgAlt:
          multimedia && multimedia.length
            ? multimedia[0].caption
            : "news image",
      };
    }
  );
};
