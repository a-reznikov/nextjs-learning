import { useQuery } from "@tanstack/react-query";
import { searchArticles } from "./module";

enum QueryKeys {
  QUERY = "query",
}

export const useArticles = (query: string) => {
  return useQuery({
    queryKey: [QueryKeys.QUERY, query],
    queryFn: () => searchArticles(query),
  });
};
