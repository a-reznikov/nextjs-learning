import { useQuery } from "@tanstack/react-query";
import { searchArticles } from "./module";

enum QueryKeys {
  QUERY = "title",
}

export const useArticles = (title: string) => {
  return useQuery({
    queryKey: [QueryKeys.QUERY, title],
    queryFn: () => searchArticles(title),
    enabled: !!title,
  });
};
