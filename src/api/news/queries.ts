import { useQuery } from "@tanstack/react-query";
import { getNewsBySection } from "./module";

enum QueryKeys {
  SECTION = "section",
}

export const useNews = (sectionName: string) => {
  return useQuery({
    queryKey: [QueryKeys.SECTION, sectionName],
    queryFn: () => getNewsBySection(sectionName),
    enabled: sectionName !== "[section]",
  });
};
