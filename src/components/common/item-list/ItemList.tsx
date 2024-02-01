import { useQuery } from "@tanstack/react-query";

const ItemList: React.FC = () => {
  const getNews = async () => {
    const response: Response = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const data = await response.json();

    return data;
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
    <ul>
      {data.results.map((news) => (
        <li key={news.uri}>{news.title}</li>
      ))}
    </ul>
  );
};

export { ItemList };
