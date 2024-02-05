import { NycTimesResponse, News, NewsRaw } from "@/api/news-section/types";

const prepareData = (data: NewsRaw[]): News[] => {
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
        imgUrl: multimedia.length ? multimedia[0].url : "/backgrounds/news.jpg",
        imgAlt: multimedia.length ? multimedia[0].type : "news image",
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
  const { results }: NycTimesResponse = await response.json();

  return prepareData(results);
};
