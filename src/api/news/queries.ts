import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/constants/query-client";
import { getNewsBySection } from "./module";

enum QueryKeys {
  SECTION = "section",
}

export const useNews = (sectionName: string) =>
  useQuery({
    queryKey: [QueryKeys.SECTION, sectionName],
    queryFn: () => getNewsBySection(sectionName),
    staleTime: 60000,
  });

export const prefetchNews = async (sectionName: string) =>
  queryClient.fetchQuery({
    queryKey: [QueryKeys.SECTION, sectionName],
    queryFn: () => getNewsBySection(sectionName),
  });
