import { useQuery } from "@tanstack/react-query";
import { getNewsBySection } from "./module";

export const useNews = (sectionName: string) => {
  return useQuery({
    queryKey: ["section", sectionName],
    queryFn: () => getNewsBySection(sectionName),
    enabled: sectionName !== "[section]",
  });
};
