import { useQuery } from "@tanstack/react-query";
import { NewsCard } from "../news-card/NewsCard";
import { Data, News } from "../types";

export const NewsList: React.FC = () => {
  const getNews = async (): Promise<News[]> => {
    const RESPONSE: Response = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const { results: DATA }: Data = await RESPONSE.json();
    const LIMIT_PER_PAGE = 4;

    return DATA.length >= LIMIT_PER_PAGE ? DATA.slice(0, LIMIT_PER_PAGE) : DATA;
  };

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["world"],
    queryFn: getNews,
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
