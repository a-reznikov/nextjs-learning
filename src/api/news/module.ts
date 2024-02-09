import { API_BASE_URL, API_SERVICE_NEWS, API_KEY } from "@/constants/variables";
import { NycTimesResponse, News } from "@/api/news/types";
import { prepareData } from "./formatter";

export const getNewsBySection = async (sectionName: string) => {
  const response: Response = await fetch(
    `${API_BASE_URL}${API_SERVICE_NEWS}${sectionName}.json?api-key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Oops. Something bad happened!");
  }

  const { results }: NycTimesResponse = await response.json();

  return prepareData(results);
};
