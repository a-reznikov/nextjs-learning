import { News, NewsRaw } from "./types";

export const prepareData = (data: NewsRaw[]): News[] => {
  return data.map(
    ({ section, updated_date, title, abstract, uri, multimedia }) => {
      const date = new Date(updated_date);
      const formattedData = Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hourCycle: "h24",
      }).format(date);

      return {
        section: section ? section : "general",
        date: formattedData,
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
