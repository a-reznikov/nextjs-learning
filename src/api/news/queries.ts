import { useQuery } from "@tanstack/react-query";
import { QUERY_CLIENT } from "@/constants/query-client";
import { getNewsBySection } from "./module";

export enum QueryKeys {
  SECTION = "section",
}

export const useNews = (sectionName: string) => {
  return useQuery({
    queryKey: [QueryKeys.SECTION, sectionName],
    queryFn: () => getNewsBySection(sectionName),
  });
};

export const prefetchNews = async (sectionName: string) => {
  return QUERY_CLIENT.prefetchQuery({
    queryKey: [QueryKeys.SECTION, sectionName],
    queryFn: () => getNewsBySection(sectionName),
  });
};
