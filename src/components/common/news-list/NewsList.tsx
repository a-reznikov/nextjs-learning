import { useQuery } from "@tanstack/react-query";
import { NewsCard } from "../news-card/NewsCard";
import { getNewsBySection } from "@/api/news-section/module";
import { HEADER_NAVIGATION } from "@/constants/links";
import Link from "next/link";

export const NewsList: React.FC = () => {
  const sectionName = HEADER_NAVIGATION[0].href.slice(1);
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["section", sectionName],
    queryFn: () => getNewsBySection(sectionName),
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ul className="flex flex-col gap-5">
      {data.map((news) => (
        <li key={news.uri}>
          <Link href="/details">
            <NewsCard news={news} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
