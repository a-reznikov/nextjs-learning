import { NycTimesResponse, News } from "@/api/news/types";
import { prepareData } from "./formatter";

export const getNewsBySection = async (
  sectionName: string
): Promise<News[]> => {
  const response: Response = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${sectionName}.json?api-key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const { results }: NycTimesResponse = await response.json();

  return prepareData(results);
};
