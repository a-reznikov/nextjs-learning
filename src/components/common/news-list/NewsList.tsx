import { useQuery } from "@tanstack/react-query";
import { NewsCard } from "../news-card/NewsCard";
import { getNewsBySection } from "@/api/news-section/module";

type Props = {
  section: string;
};

export const NewsList: React.FC<Props> = ({ section }) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["section", section],
    queryFn: () => getNewsBySection(section),
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
          <NewsCard news={news} />
        </li>
      ))}
    </ul>
  );
};
