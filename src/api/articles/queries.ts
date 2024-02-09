import { useQuery } from "@tanstack/react-query";
import { QUERY_CLIENT } from "@/constants/query-client";
import { searchArticles } from "./module";

enum QueryKeys {
  TITLE = "title",
}

export const useArticles = (title: string) => {
  return useQuery({
    queryKey: [QueryKeys.TITLE, title],
    queryFn: () => searchArticles(title),
  });
};

export const prefetchArticles = async (title: string) => {
  return QUERY_CLIENT.prefetchQuery({
    queryKey: [QueryKeys.TITLE, title],
    queryFn: () => searchArticles(title),
  });
};
