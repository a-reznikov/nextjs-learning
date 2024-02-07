import {
  API_BASE_URL,
  API_SERVICE_ARTICLES,
  API_KEY,
} from "@/constants/variables";
import { Article, ArticlesResponse } from "./types";
import { prepareArticle } from "./formatter";

export const searchArticles = async (
  query: string
): Promise<Article | null> => {
  const result: Response = await fetch(
    `${API_BASE_URL}${API_SERVICE_ARTICLES}articlesearch.json?q=${query}&api-key=${API_KEY}`
  );
  const { response }: ArticlesResponse = await result.json();

  return prepareArticle(response.docs);
};
