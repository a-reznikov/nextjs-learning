import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/constants/query-client";
import { ONE_MINUTE } from "@/constants/time";
import { searchArticles } from "./module";

enum QueryKeys {
  TITLE = "title",
}

export const useArticles = (title: string) =>
  useQuery({
    queryKey: [QueryKeys.TITLE, title],
    queryFn: () => searchArticles(title),
    staleTime: ONE_MINUTE,
  });

export const prefetchArticles = async (title: string) =>
  queryClient.fetchQuery({
    queryKey: [QueryKeys.TITLE, title],
    queryFn: () => searchArticles(title),
  });
