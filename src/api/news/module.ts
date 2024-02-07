import { API_BASE_URL, API_SERVICE_NEWS, API_KEY } from "@/constants/variables";
import { prepareData } from "./formatter";
import { NycTimesResponse, News } from "@/api/news/types";

export const getNewsBySection = async (
  sectionName: string
): Promise<News[]> => {
  const response: Response = await fetch(
    `${API_BASE_URL}${API_SERVICE_NEWS}${sectionName}.json?api-key=${API_KEY}`
  );
  const { results }: NycTimesResponse = await response.json();
  return prepareData(results);
};
