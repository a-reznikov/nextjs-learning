import { getNewsBySection } from "@/api/news-section/module";
import { HEADER_NAVIGATION } from "@/constants/links";
import { useQuery } from "@tanstack/react-query";

export const NewsDetails: React.FC = () => {
  const sectionName = HEADER_NAVIGATION[0].href.slice(1);
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["section", sectionName],
    queryFn: () => getNewsBySection(sectionName),
  });

  //TODO get details from React Query state

  return <div>News Details</div>;
};
