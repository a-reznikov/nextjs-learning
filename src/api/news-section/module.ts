import { Data, News, RawNews } from "@/api/news-section/types";

const prepareData = (data: RawNews[]): News[] => {
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
          multimedia && multimedia.length ? multimedia[0].url : "/news.jpg",
        imgAlt:
          multimedia && multimedia.length ? multimedia[0].type : "news image",
      };
    }
  );
};

export const getNewsBySection = async (
  sectionName: string
): Promise<News[]> => {
  const response: Response = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${sectionName}.json?api-key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const { results: data }: Data = await response.json();
  const limitPerPage = 4;
  const newsList =
    data.length >= limitPerPage ? data.slice(0, limitPerPage) : data;

  return prepareData(newsList);
};
