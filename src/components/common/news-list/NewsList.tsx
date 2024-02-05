import { useNews } from "@/api/news/queries";
import { NewsCard } from "../news-card/NewsCard";

type Props = {
  section: string;
};

export const NewsList: React.FC<Props> = ({ section }) => {
  const { isPending, isError, data, error } = useNews(section);

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
